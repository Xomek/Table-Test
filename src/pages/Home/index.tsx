import { FC, useMemo, useState } from "react";
import { Actions, List } from "../../components";
import { randomData } from "../../helpers/randomData";
import { ListInterface } from "../../interfaces/list.interface";
import styles from "./Home.module.scss";

const Home: FC = () => {
  const items: ListInterface[] = useMemo(() => randomData(), []);
  const [data, setData] = useState<ListInterface[]>(items);

  return (
    <div className="page">
      {data.length ? <List items={data} /> : "Нет вариантов"}

      <Actions
        className={styles.actions}
        data={items}
        setFilterItems={setData}
      ></Actions>
    </div>
  );
};

export default Home;
