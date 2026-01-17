import styles from "../styles/style.module.css";
import { useProducto } from "./hooks/useProducto";
import { ProductCardProps } from "../interfaces";
import { ProductCardProvider } from "./context/ProductCardProvider";
import { ProductButtons, ProductImage, ProductTitle } from "./components";


export const ProductCard = ({ children, product } : ProductCardProps) => {
  const { counter, incrementBy } = useProducto();
  
  return (
    <ProductCardProvider value={{ counter, incrementBy, product }}>
    <div className={styles.productCard}>
      {children}
    </div>
    </ProductCardProvider>
  );
};

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
