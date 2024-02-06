import { useContext } from "react";
import styles from "./Menu.module.css";
import { AppContext } from "../../context/app.context";
import { FirstLevelMenuItem, Page } from "../../types/menu.types";
import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { firstLevelMenu } from "../../helpers/helpers";

export const Menu = (): JSX.Element => {
  const { menu, firstCategory, setMenu } = useContext(AppContext);
  const router = useRouter();

  const toggleThirdLevel = (secondCategory: string) => {
    const newMenu = menu.map((item) => {
      if (item._id.secondCategory == secondCategory) {
        item.isOpened = !item.isOpened;
      }
      return item;
    });
    setMenu && setMenu(newMenu);
  };

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((m) => (
          <div key={m.route}>
            <Link href={`/${m.route}`}>
              <a>
                <div
                  className={cn(styles.firstLevel, {
                    [styles.firstLevelActive]: m.id == firstCategory,
                  })}
                >
                  {m.icon}
                  <span>{m.name}</span>
                </div>
              </a>
            </Link>
            {m.id == firstCategory && buildSecondLevel(m)}
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondLevelBlock}>
        {menu.map((m) => {
          return (
            <div key={m._id.secondCategory}>
              <div
                className={styles.secondLevel}
                onClick={() => toggleThirdLevel(m._id.secondCategory)}
              >
                {m._id.secondCategory}
              </div>
              <div
                className={cn(styles.thirdLevelBlock, {
                  [styles.thirdLevelOpened]: m.isOpened,
                })}
              >
                {buildThirdLevel(m.pages, menuItem.route)}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const buildThirdLevel = (pages: Page[], route: string) => {
    return (
      <div>
        {pages.map((page) => (
          <Link href={`/${route}/${page.alias}`}>
            <a
              className={cn(styles.thirdLevel, {
                [styles.thirdLevelActive]:
                  `/${route}/${page.alias}` == router.asPath,
              })}
            >
              {page.category}
            </a>
          </Link>
        ))}
      </div>
    );
  };

  return <div className={styles.menu}>{buildFirstLevel()}</div>;
};
