import { ButtonIconProps, icons } from "./ButtonIcon.types";
import styles from "./ButtonIcon.module.css";
import cn from "classnames";

export const ButtonIcon = ({
  appearance,
  icon,
  className,
  ...props
}: ButtonIconProps): JSX.Element => {
  const Icon = icons[icon];
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance == "primary",
        [styles.white]: appearance == "white",
      })}
      {...props}
    >
      <Icon />
    </button>
  );
};
