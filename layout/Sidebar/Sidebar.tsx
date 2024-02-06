import { Menu } from "../Menu/Menu";
import { SidebarProps } from "./Sidebar.types";

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
  return (
    <div {...props}>
      <Menu />
    </div>
  );
};
