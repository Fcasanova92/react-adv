import { useState } from "react";

export const useProducto = () => {

    const [counter, setCounter] = useState<number>(0);

    const incrementBy = (value: number) => {
        setCounter(prev => Math.max(0, prev + value));
    }

    return {
        counter,
        incrementBy
    };
    
}