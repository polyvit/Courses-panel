import { FunctionComponent, KeyboardEvent, useRef, useState } from "react";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { LayoutProps } from "./Layout.types";
import { Sidebar } from "./Sidebar/Sidebar";
import styles from "./Layout.module.css";
import { AppContextProvider, IAppContext } from "../context/app.context";
import { Up } from "../components";
import cn from "classnames";

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  const [isDisplayed, setIsDisplayed] = useState<boolean>(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  const skipContentHandle = (e: KeyboardEvent) => {
    if (e.code == "Space" || e.code == "Enter") {
      e.preventDefault();
      bodyRef.current?.focus();
    }
    setIsDisplayed(false);
  };

  return (
    <div className={styles.wrapper}>
      <a
        onFocus={() => setIsDisplayed(true)}
        tabIndex={1}
        className={cn(styles.skiplink, {
          [styles.displayed]: isDisplayed,
        })}
        onKeyDown={skipContentHandle}
      >
        К содержанию
      </a>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <div className={styles.body} ref={bodyRef} tabIndex={0}>
        {children}
      </div>
      <Footer className={styles.footer} />
      <Up />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
};
