import {ProductCard} from "../ProductCard";
import cofeeMug from "/coffee-mug.png";

const product = {
  title: "Coffee Mug - Compound Component Pattern",
  imgUrl: cofeeMug,
  description: "A nice coffee mug to enjoy your favorite beverage.",
}

const ShopPages = ({}) => {
  return (
    <>
      <h1>ShopPages</h1>
      <hr />
    
      <ProductCard product={product}>
        <ProductCard.Image/>
        <ProductCard.Title title=""/>
        <ProductCard.Buttons />
      </ProductCard>
    </>
  );
};

export default ShopPages;
