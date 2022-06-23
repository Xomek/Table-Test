import { FC, HTMLAttributes } from "react";
import { filterStyles } from "../../helpers/filterStyles";
import styles from "./Card.module.scss";

const Card: FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  const CardStyles = filterStyles([className, styles.card]);

  return <div className={CardStyles}></div>;
};

export default Card;
