import { ReactElement } from "react";
import { Provider } from "./productContext";
import { ProductCardContextProps } from "../../interfaces";

export const ProductCardProvider = ({ children, value } : {children: ReactElement | ReactElement[], value: ProductCardContextProps}) => {
    return (
    <Provider value={value}>
        {children}
    </Provider>     
    );
};
