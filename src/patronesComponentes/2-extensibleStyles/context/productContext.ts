import { createContext, useContext } from "react";
import { ProductCardContextProps } from "../../interfaces";


const ProductCardContext = createContext({} as ProductCardContextProps);

export const { Provider } = ProductCardContext;

export const useProductCardContext = () => {
    const context = useContext(ProductCardContext);
    if(!context){
        throw new Error("useProductCardContext must be used within a ProductCard");
    }
    return context;
}
