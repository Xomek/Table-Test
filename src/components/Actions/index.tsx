import React, {
  Dispatch,
  FC,
  HTMLAttributes,
  ReactNode,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { filterStyles } from "../../helpers/filterStyles";
import { ListInterface } from "../../interfaces/list.interface";
import styles from "./Actions.module.scss";

interface ActionsPropsInterface extends HTMLAttributes<HTMLDivElement> {
  data: ListInterface[];
  setFilterItems: Dispatch<SetStateAction<ListInterface[]>>;
}

const Actions: FC<ActionsPropsInterface> = ({
  className,
  data,
  setFilterItems,
  ...props
}) => {
  const ActionsStyles = filterStyles([className, styles.actions]);
  const [isShowClose, setIsShowClose] = useState<boolean>(false);
  const [isShowSearch, setIsShowSearch] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [selectValue, setSelectValue] = useState<string>("");
  const actionsRef = useRef(null);

  useEffect(() => {
    function hideActions(e: MouseEvent) {
      // @ts-ignore плохо

      if (!e.composedPath().includes(actionsRef.current)) {
        setIsShowSearch(false);
        setIsShowClose(false);
      }
    }

    document.addEventListener("click", hideActions);

    return () => {
      document.removeEventListener("click", hideActions);
    };
  }, []);

  const toggleClose = () => {
    setIsShowSearch(false);
    setIsShowClose(true);
  };
  const toggleSearch = () => {
    setIsShowClose(false);
    setIsShowSearch(true);
  };

  const searchData = (value: string) => {
    setInputValue(value);
    const filterData = data.filter((item) => item.title.match(value));
    setFilterItems(filterData);
  };

  const hideData = (value: string) => {
    setSelectValue(value);
    const filterData = data.filter((item) => item.title !== value);
    setFilterItems(filterData);
  };

  return (
    <div className={ActionsStyles} {...props} ref={actionsRef}>
      {isShowClose ? (
        <div className={styles.field + " " + styles.showCloseField}>
          <button>
            <img src="./assets/images/close.svg" alt="" />
          </button>
          <select
            onChange={(e) => hideData(e.target.value)}
            value={selectValue}
          >
            {data.map((option, index) => (
              <option key={index}>{option.title}</option>
            ))}
          </select>
        </div>
      ) : (
        <button className={styles.btn} onClick={toggleClose}>
          <img src="./assets/images/close.svg" alt="" />
        </button>
      )}

      {isShowSearch ? (
        <div className={styles.field + " " + styles.showSearchField}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => searchData(e.target.value)}
          />
          <button>
            <img src="./assets/images/search.svg" alt="" />
          </button>
        </div>
      ) : (
        <button className={styles.btn} onClick={toggleSearch}>
          <img src="./assets/images/search.svg" alt="" />
        </button>
      )}
    </div>
  );
};

export default Actions;
