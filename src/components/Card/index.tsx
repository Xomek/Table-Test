import { FC, HTMLAttributes, useState } from "react";
import { filterStyles } from "../../helpers/filterStyles";
import moment from "moment";
import { CardInterface } from "../../interfaces/card.interface";
import styles from "./Card.module.scss";
import Table from "./Table";
import { CSSTransition } from "react-transition-group";

interface CardPropsInterface extends HTMLAttributes<HTMLDivElement> {
  card: CardInterface;
}

const Card: FC<CardPropsInterface> = ({ className, card, ...props }) => {
  const CardStyles = filterStyles([className, styles.card]);
  const [visible, setVisible] = useState<boolean>(false);

  const { title, subTitle, dateStart, dateEnd, data } = card;
  const date = {
    start: moment(dateStart).format("MM.DD.YYYY"),
    end: moment(dateEnd).format("MM.DD.YYYY"),
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
        <Table data={data} />
      </CSSTransition>
    </div>
  );
};

export default Card;
