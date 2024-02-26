import { KeyboardEvent } from "react";
import { SortEnum, SortProps } from "./Sort.types";
import SortIcon from "./sort.svg";
import styles from "./Sort.module.css";
import cn from "classnames";

export const Sort = ({
  sort,
  setSort,
  className,
  ...props
}: SortProps): JSX.Element => {
  const keyDownHandler = (e: KeyboardEvent, sorting: SortEnum) => {
    if (e.code == "Space" || e.code == "Enter") {
      e.preventDefault();
      setSort(sorting);
    }
  };

  return (
    <div className={cn(styles.sort, className)} {...props}>
      <span
        onClick={() => setSort(SortEnum.Rating)}
        tabIndex={0}
        onKeyDown={(e: KeyboardEvent) => keyDownHandler(e, SortEnum.Rating)}
        className={cn({
          [styles.active]: sort == SortEnum.Rating,
        })}
      >
        <SortIcon className={styles.icon} />
        По рейтингу
      </span>
      <span
        onClick={() => setSort(SortEnum.Price)}
        tabIndex={0}
        onKeyDown={(e: KeyboardEvent) => keyDownHandler(e, SortEnum.Price)}
        className={cn({
          [styles.active]: sort == SortEnum.Price,
        })}
      >
        <SortIcon className={styles.icon} />
        По цене
      </span>
    </div>
  );
};
