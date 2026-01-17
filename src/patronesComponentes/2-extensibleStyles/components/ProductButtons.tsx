import styles from "../../styles/style.module.css";
import { useProductCardContext } from "../context/productContext";

export const ProductButtons = () => {
  const { counter, incrementBy } = useProductCardContext();
  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonMinus} onClick={() => incrementBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={styles.buttonAdd} onClick={() => incrementBy(1)}>
        +
      </button>
    </div>
  );
};
