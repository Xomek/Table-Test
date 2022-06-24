import { FC } from "react";
import { List } from "../../components";
import { randomData } from "../../helpers/randomData";
import { ListInterface } from "../../interfaces/list.interface";

const Home: FC = () => {
  const items: ListInterface[] = randomData();

  return (
    <div className="page">
      <List items={items} />
    </div>
  );
};

export default Home;
