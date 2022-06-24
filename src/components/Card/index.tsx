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
  const [isSort, setIsSort] = useState<boolean>(false);

  useEffect(() => {
    setItems(data);
  }, []);

  useEffect(() => {
    const arr = [...data];
    for (let i = 0; arr.length !== 12; i++) {
      arr.push({ title: "", number: null });
    }

    setItems(arr);
    setIsSort(false);
  }, [isSort]);

  const sortByNumber = () => {
    const dataByNumber = data.sort((a, b) => a.number! - b.number!); // Не хорошо
    setIsSort(true);
    setItems(dataByNumber);
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
        <Table data={items} sort={sortByNumber} />
      </CSSTransition>
    </div>
  );
};

export default Card;
