import { ProductCardProps } from "../../interfaces";
import { ProductCardProvider } from "../context/ProductCardProvider";
import { useProducto } from "../../hooks/useProducto";

interface ProductCardExtensibleStylesProps extends ProductCardProps {
  className?: string;
}

export const ProductCard = ({ children, product, className } : ProductCardExtensibleStylesProps) => {
  const { counter, incrementBy } = useProducto();
  
  return (
    <ProductCardProvider value={{ counter, incrementBy, product }}>
    <div className={className}>
      {children}
    </div>
    </ProductCardProvider>
  );
};

