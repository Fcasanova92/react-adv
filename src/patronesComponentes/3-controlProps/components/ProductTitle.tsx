import styles from "../styles/style.module.css";
import { useProductCardContext } from "../context/productContext";

export const ProductTitle = ({title = ""} : {title?: string}) => {
  const { product } = useProductCardContext();
  return <span className={styles.productTitle}>{title ? product.title : title}</span>;
};
