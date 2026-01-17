import styles from "../../styles/style.module.css";
import noImg from "../../assets/no-image.jpg";
import { useProductCardContext } from "../context/productContext";

export const ProductImage = ({img = ""} : {img?: string}) => {
  const{ product } = useProductCardContext();
  const imgToShow = img || product.imgUrl || noImg;
  return <img className={styles.productImg} src={imgToShow} alt="Product" />;
};
