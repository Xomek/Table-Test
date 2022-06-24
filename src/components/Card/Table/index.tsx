import { FC, useEffect, useState } from "react";
import { filterStyles } from "../../../helpers/filterStyles";
import { DataInterface } from "../../../interfaces/data.interface";
import styles from "./Table.module.scss";

interface TablePropsInterface {
  data: DataInterface[];
}

const Table: FC<TablePropsInterface> = ({ data }) => {
  const TableStyles = filterStyles([styles.table]);
  const [items, setItems] = useState<DataInterface[]>();

  useEffect(() => {
    setItems(data);
  }, []);

  const sortByNumber = () => {
    const dataByNumber = data.sort((a, b) => a.number - b.number);
    setItems(dataByNumber);
  };

  return (
    <div className={TableStyles}>
      <div className={styles.header}>
        <div onClick={sortByNumber}>
          <span>
            #
            <svg
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              viewBox="0 0 386.257 386.257"
              fill="#2E465C"
            >
              <polygon points="0,96.879 193.129,289.379 386.257,96.879 " />
            </svg>
          </span>

          <span>Title</span>
          <span>
            Number
            <svg
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              viewBox="0 0 386.257 386.257"
              fill="#2E465C"
            >
              <polygon points="0,96.879 193.129,289.379 386.257,96.879 " />
            </svg>
          </span>
        </div>
      </div>
      <div className={styles.footer}>
        {items &&
          items.map((item, index) => (
            <div key={index}>
              <span>{index + 1}</span>
              <span>{item.title}</span>
              <span>{item.number}</span>
            </div>
          ))}
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Table;
