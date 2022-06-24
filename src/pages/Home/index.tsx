import { FC, useMemo, useState } from "react";
import { Actions, List } from "../../components";
import { randomData } from "../../helpers/randomData";
import { ListInterface } from "../../interfaces/list.interface";
import styles from "./Home.module.scss";

const Home: FC = () => {
  const items: ListInterface[] = useMemo(() => randomData(), []);
  const [filterItems, setFilterItems] = useState<ListInterface[]>(items);

  return (
    <div className="page">
      {filterItems.length ? (
        <List items={filterItems} />
      ) : (
        <List items={items} />
      )}
      <Actions
        className={styles.actions}
        data={items}
        setFilterItems={setFilterItems}
      ></Actions>
    </div>
  );
};

export default Home;
