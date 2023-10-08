import { DataInterface } from "./data.interface";

export interface CardInterface {
  title: string;
  subTitle: string;
  dateStart: number;
  dateEnd: number;
  data: DataInterface[];
}
