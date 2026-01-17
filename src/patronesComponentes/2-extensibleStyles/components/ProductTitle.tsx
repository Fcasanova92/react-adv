import styles from "../../styles/style.module.css";
import { useProductCardContext } from "../context/productContext";

export const ProductTitle = ({title, className = ""} : {title?: string, className?:string}) => {
  const { product } = useProductCardContext();
  return <span className={ `${styles.productTitle} ${className ? className : ""}`}>{title ? title : product.title}</span>;
};
