import { PTagProps } from "./PTag.types";
import styles from "./PTag.module.css";

export const PTag = ({
  size = "m",
  children,
  ...props
}: PTagProps): JSX.Element => {
  return (
    <p className={styles[size]} {...props}>
      {children}
    </p>
  );
};
