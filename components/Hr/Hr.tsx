import { HrProps } from "./Hr.types";
import styles from "./Hr.module.css";
import cn from "classnames";

export const Hr = ({ className, ...props }: HrProps): JSX.Element => {
  return <hr className={cn(className, styles.hr)} {...props} />;
};
