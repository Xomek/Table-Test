import { CardInterface } from "./card.interface";

export interface ListInterface {
  title: string;
  items: { title: string; items: CardInterface[] }[];
}
