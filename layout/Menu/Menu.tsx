import { useContext } from "react";
import styles from "./Menu.module.css";
import { AppContext } from "../../context/app.context";

export const Menu = (): JSX.Element => {
  const { menu, firstCategory, setMenu } = useContext(AppContext);
  return (
    <div>
      <ul>
        {menu.map((el) => (
          <li key={el._id.secondCategory}>{el._id.secondCategory}</li>
        ))}
      </ul>
    </div>
  );
};
