import { ProductCard } from "./components"
import cofeeMug from "/coffee-mug.png";
import style from "./styles/content-style.module.css";

const product = {
  title: "Coffee Mug - Compound Component Pattern",
  imgUrl: cofeeMug,
  description: "A nice coffee mug to enjoy your favorite beverage.",
}


export const ExtensibleStylesComponent = () => { {
    return (
    <ProductCard product={product} className={style.productCardDark}>
        <ProductCard.Image/>
        <ProductCard.Title title="" className={style.productTitleWhite}/>
        <ProductCard.Buttons />
      </ProductCard>
    )
}; 
}