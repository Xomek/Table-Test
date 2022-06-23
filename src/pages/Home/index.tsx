import { FC } from "react";
import { Card } from "../../components";
import { randomData } from "../../helpers/randomData";

const Home: FC = () => {
  const card = randomData();
  console.log(card);

  return (
    <div>
      <Card />
    </div>
  );
};

export default Home;
