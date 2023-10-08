import { FC, HTMLAttributes, useEffect, useState } from "react";
import { filterStyles } from "../../helpers/filterStyles";
import moment from "moment";
import { CardInterface } from "../../interfaces/card.interface";
import styles from "./Card.module.scss";
import Table from "./Table";
import { CSSTransition } from "react-transition-group";
import { DataInterface } from "../../interfaces/data.interface";

interface CardPropsInterface extends HTMLAttributes<HTMLDivElement> {
  card: CardInterface;
}

const Card: FC<CardPropsInterface> = ({ className, card, ...props }) => {
  const CardStyles = filterStyles([className, styles.card]);

  const { title, subTitle, dateStart, dateEnd, data } = card;
  const date = {
    start: moment(dateStart).format("MM.DD.YYYY"),
    end: moment(dateEnd).format("MM.DD.YYYY"),
  };

  const [items, setItems] = useState<DataInterface[]>([]);
  const [visible, setVisible] = useState<boolean>(false);
  const [isSortNumber, setIsSortNumber] = useState<boolean>(false);
  const [isSortIndex, setIsSortIndex] = useState<boolean>(false);

  useEffect(() => {
    setItems(data);
  }, []);

  useEffect(() => {
    const arr = [...data];
    for (let i = 0; arr.length < 12; i++) {
      arr.push({ title: "", number: null });
    }

    setItems(arr);
  }, [isSortNumber, isSortIndex]);

  const sortByNumber = () => {
    let dataByNumber: DataInterface[] = [];
    if (isSortNumber) {
      dataByNumber = data.sort((a, b) => b.number! - a.number!);
      setIsSortNumber((prevState) => !prevState);
      setItems(dataByNumber);
    } else {
      dataByNumber = data.sort((a, b) => a.number! - b.number!);
      setIsSortNumber((prevState) => !prevState);
      setItems(dataByNumber);
    }
  };

  const sortByIndex = () => {
    let dataByIndex: DataInterface[] = [];
    dataByIndex = data.reverse();
    setIsSortIndex((prevState) => !prevState);
    setItems(dataByIndex);
  };

  return (
    <div className={CardStyles} {...props}>
      <div className={styles.header} onClick={() => setVisible(!visible)}>
        <div>
          <div className={styles.title}>{title}</div>
          <div className={styles.subTitle}>{subTitle}</div>
        </div>
        <div className={styles.data}>
          {date.start} - {date.end}
        </div>
      </div>
      <CSSTransition
        in={visible}
        timeout={200}
        classNames={{ enterDone: styles.show, exitActive: styles.hide }}
        unmountOnExit
      >
        <Table
          data={items}
          sortByNumber={sortByNumber}
          sortByIndex={sortByIndex}
        />
      </CSSTransition>
    </div>
  );
};

export default Card;
