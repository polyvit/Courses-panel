import CheckIcon from "./check.svg";
import styles from "./Advantages.module.css";
import { PTag } from "../PTag/PTag";
import { TopPageAdvantage } from "../../types/page.types";

export const Advantage = ({ advantages }): JSX.Element => {
  return (
    <>
      {advantages.map((el: TopPageAdvantage) => (
        <div className={styles.advantage} key={el._id}>
          <CheckIcon />
          <div className={styles.title}>{el.title}</div>
          <hr className={styles.vline} />
          <PTag>{el.description}</PTag>
        </div>
      ))}
    </>
  );
};
