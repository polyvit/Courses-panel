import styles from "./Up.module.css";
import { motion, useAnimation } from "framer-motion";
import { useScrollY } from "../../hooks/useScrollY";
import { useEffect } from "react";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";

export const Up = (): JSX.Element => {
  const controls = useAnimation();
  const scrollY = useScrollY();

  useEffect(() => {
    controls.start({ opacity: scrollY / document.body.scrollHeight });
  }, [scrollY, controls]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      className={styles.up}
      animate={controls}
      initial={{ opacity: 0 }}
    >
      <ButtonIcon appearance="primary" icon="up" onClick={scrollToTop} />
    </motion.button>
  );
};
