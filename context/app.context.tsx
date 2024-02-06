import { ReactNode, createContext, useState } from "react";
import { MenuItem } from "../types/menu.types";
import { TopLevelCategory } from "../types/page.types";

export interface IAppContext {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  setMenu?(newMenu: MenuItem[]): void;
}

export const AppContext = createContext<IAppContext>({
  menu: [],
  firstCategory: TopLevelCategory.Courses,
});

export const AppContextProvider = ({
  children,
  menu,
  firstCategory,
}: IAppContext & { children: ReactNode }): JSX.Element => {
  const [menuState, setMenuState] = useState(menu);

  const setMenu = (newMenu: MenuItem[]) => {
    setMenuState(newMenu);
  };

  return (
    <AppContext.Provider value={{ menu: menuState, firstCategory, setMenu }}>
      {children}
    </AppContext.Provider>
  );
};
