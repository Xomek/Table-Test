import { FC, useEffect, useState } from "react";
import { filterStyles } from "../../../helpers/filterStyles";
import { DataInterface } from "../../../interfaces/data.interface";
import styles from "./Table.module.scss";

interface TablePropsInterface {
  data: DataInterface[];
  sort: () => void;
}

const Table: FC<TablePropsInterface> = ({ data, sort }) => {
  const TableStyles = filterStyles([styles.table]);

  return (
    <div className={TableStyles}>
      <div className={styles.header}>
        <div onClick={sort}>
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
        {data &&
          data.map((item, index) => (
            <div key={index}>
              <span>{index + 1}</span>
              <span>{item.title}</span>
              <span>{item.number}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Table;
