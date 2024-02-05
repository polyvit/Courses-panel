import { TagProps } from "./Tag.types";
import styles from "./Tag.module.css";
import cn from "classnames";

export const Tag = ({
  size = "s",
  color = "ghost",
  children,
  href,
  ...props
}: TagProps): JSX.Element => {
  return (
    <div
      className={cn(styles.tag, {
        [styles.s]: size == "s",
        [styles.m]: size == "m",
        [styles.ghost]: color == "ghost",
        [styles.green]: color == "green",
        [styles.red]: color == "red",
        [styles.gray]: color == "gray",
        [styles.primary]: color == "primary",
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
