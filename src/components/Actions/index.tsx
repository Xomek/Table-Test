import {
  Dispatch,
  FC,
  HTMLAttributes,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { filterStyles } from "../../helpers/filterStyles";
import { ListInterface } from "../../interfaces/list.interface";
import { CSSTransition } from "react-transition-group";
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
  const [selectValue, setSelectValue] = useState<string>("Выберите");
  const actionsRef = useRef(null);

  useEffect(() => {
    function hideActions(e: MouseEvent) {
      // @ts-ignore Ну, а как по другому? :(

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
      <div className={styles.field}>
        <button onClick={toggleClose}>
          <img src="./assets/images/close.svg" alt="" />
        </button>
        <CSSTransition
          in={isShowClose}
          timeout={300}
          classNames={{
            enterActive: styles.showCloseField,
            exitActive: styles.hideCloseField,
          }}
          unmountOnExit
        >
          <select
            onChange={(e) => hideData(e.target.value)}
            value={selectValue}
          >
            <option disabled>Выберите</option>
            {data.map((option, index) => (
              <option key={index}>{option.title}</option>
            ))}
          </select>
        </CSSTransition>
      </div>

      <div className={styles.field}>
        <CSSTransition
          in={isShowSearch}
          timeout={300}
          classNames={{
            enterActive: styles.showSearchField,
            exitActive: styles.hideSearchField,
          }}
          unmountOnExit
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => searchData(e.target.value)}
          />
        </CSSTransition>
        <button onClick={toggleSearch}>
          <img src="./assets/images/search.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Actions;
