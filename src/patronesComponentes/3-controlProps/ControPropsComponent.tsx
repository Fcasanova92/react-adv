
import { ProductCard } from "./components";
import cofeeMug from "/coffee-mug.png";

const product = {
  title: "Coffee Mug - Compound Component Pattern",
  imgUrl: cofeeMug,
  description: "A nice coffee mug to enjoy your favorite beverage.",
}


export const ControlPropsComponent = () => { {
    return (
    <ProductCard product={product} >
        <ProductCard.Image/>
        <ProductCard.Title title=""/>
        <ProductCard.Buttons />
    </ProductCard>
    )
}; 
}