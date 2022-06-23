import { FC, HTMLAttributes, useState } from "react";
import { filterStyles } from "../../helpers/filterStyles";
import { CardInterface } from "../../interfaces/card.interface";
import styles from "./Card.module.scss";
import Table from "./Table";

interface CardPropsInterface extends HTMLAttributes<HTMLDivElement> {
  card?: CardInterface;
}

const Card: FC<CardPropsInterface> = ({ className, card, ...props }) => {
  const CardStyles = filterStyles([className, styles.card]);
  const [visible, setVisible] = useState<boolean>(false);
  // const { title, subTitle, dateStart, dateEnd } = card;

  return (
    <div className={CardStyles} {...props}>
      <div className={styles.header} onClick={() => setVisible(!visible)}>
        <div>
          <div className={styles.title}>x5gdz</div>
          <div className={styles.subTitle}>x5gdz</div>
        </div>
        <div className={styles.data}>02.02.2022 - 03.03.2033</div>
      </div>
      {visible && <Table />}
    </div>
  );
};

export default Card;
