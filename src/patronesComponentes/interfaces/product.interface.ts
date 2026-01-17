import { ReactElement } from "react";

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
}

interface Product {
  title: string;
  imgUrl: string;
  description: string;
}

export interface ProductCardContextProps {
    counter: number;
    incrementBy: (value: number) => void;
    product: Product;
}
