import { FC, HTMLAttributes } from "react";
import { filterStyles } from "../../helpers/filterStyles";
import { ListInterface } from "../../interfaces/list.interface";
import Card from "../Card";
import styles from "./List.module.scss";

interface ListPropsInterface extends HTMLAttributes<HTMLUListElement> {
  items: ListInterface[];
}

const List: FC<ListPropsInterface> = ({ className, items, ...props }) => {
  const ListStyles = filterStyles([className, styles.list]);

  return (
    <ul className={ListStyles} {...props}>
      {items.map((item, index) => (
        <div className={styles.box} key={index}>
          <li>{item.title}</li>
          {item.items.map((item, index) => (
            <ul className={styles.subList} key={index}>
              <li>{item.title}</li>
              <ul className={styles.cardList}>
                {item.items.map((card, index) => (
                  <Card key={index} card={card} />
                ))}
              </ul>
            </ul>
          ))}
        </div>
      ))}
    </ul>
  );
};

export default List;
