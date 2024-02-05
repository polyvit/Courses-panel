import { FooterProps } from "./Footer.types";
import styles from "./Footer.module.css";
import cn from "classnames";

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <div className={cn(className, styles.footer)} {...props}>
      <div>
        Polyvitlim © 2024 - {new Date().getFullYear()} Все права защищены
      </div>
      <a href="#" target="_blank">
        Пользовательское соглашение
      </a>
      <a href="#" target="_blank">
        Политика конфиденциальности
      </a>
    </div>
  );
};
