import { Menu } from "../Menu/Menu";
import { SidebarProps } from "./Sidebar.types";
import styles from "./Sidebar.module.css";
import Logo from "../logo.svg";
import cn from "classnames";

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <Logo className={styles.logo} />
      <div>Поиск</div>
      <Menu />
    </div>
  );
};
