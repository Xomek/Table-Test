import { FC } from "react";
import styles from "./Table.module.scss";

const Table: FC = () => {
  return (
    <div className={styles.table}>
      <div className={styles.header}>
        <div>
          <span>#</span>
          <span>Title</span>
          <span>Number</span>
        </div>
      </div>
      <div className={styles.footer}>
        <div>
          <span>1</span>
          <span>x5gdz</span>
          <span>25000</span>
        </div>
        <div>
          <span>2</span>
          <span>as23dz</span>
          <span>20000</span>
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
