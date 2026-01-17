import styles from "../../styles/style.module.css";
import { ProductCardProps } from "../../interfaces";
import { ProductCardProvider } from "../context/ProductCardProvider";
import { useProducto } from "../../hooks/useProducto";

interface ProductContextExtensibleStylesProps extends ProductCardProps {
  className?: string;
}


export const ProductCard = ({ children, product, className } : ProductContextExtensibleStylesProps) => {
  const { counter, incrementBy } = useProducto();
  
  return (
    <ProductCardProvider value={{ counter, incrementBy, product }}>
    <div className={ `${styles.productCard} ${className ? className : ""}`}>
      {children}
    </div>
    </ProductCardProvider>
  );
};

