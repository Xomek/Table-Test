import { useWindowWidth } from "@react-hook/window-size";
import { FC, HTMLAttributes, ReactNode, useEffect, useState } from "react";
import { filterStyles } from "../../helpers/filterStyles";
import { CardInterface } from "../../interfaces/card.interface";
import { ListInterface } from "../../interfaces/list.interface";
import Card from "../Card";
import styles from "./List.module.scss";

interface ListPropsInterface extends HTMLAttributes<HTMLUListElement> {
  items: ListInterface[];
}

const List: FC<ListPropsInterface> = ({ className, items, ...props }) => {
  const ListStyles = filterStyles([className, styles.list]);
  const width = useWindowWidth();

  const getWrappedCards = (cards: CardInterface[]): ReactNode[] => {
    let num = 4;

    switch (true) {
      case width > 1380 && width < 1920:
        num = 4;
        break;
      case width > 1059 && width < 1375:
        num = 3;
        break;
      case width > 731 && width < 1058:
        num = 2;
        break;
    }

    if (cards.length <= num)
      return cards.map((card, index) => <Card key={index} card={card} />);

    const wrappedCards = cards.reduce((current: any, card, index) => {
      if (index < num) current.push([<Card key={index} card={card} />]);
      else current[index % num].push(<Card key={index} card={card} />);
      return current;
    }, []);

    return wrappedCards.map((elements: ReactNode, index: number) => (
      <div key={index} className={styles.listWrapper}>
        {elements}
      </div>
    ));
  };

  return (
    <ul className={ListStyles} {...props}>
      {items.map((item, index) => (
        <div className={styles.box} key={index}>
          <li>{item.title}</li>
          {item.items.map(({ title, items }, index) => (
            <ul className={styles.subList} key={index}>
              <li>{title}</li>
              <ul className={styles.cardList}>
                {items && getWrappedCards(items)}
              </ul>
            </ul>
          ))}
        </div>
      ))}
    </ul>
  );
};

export default List;
