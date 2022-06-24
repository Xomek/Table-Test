import { FC } from "react";
import { List } from "../../components";
import { randomData } from "../../helpers/randomData";

const Home: FC = () => {
  const items: any[] = randomData();
  console.log(items);

  return (
    <div className="page">
      <List items={items} />
    </div>
  );
};

export default Home;
