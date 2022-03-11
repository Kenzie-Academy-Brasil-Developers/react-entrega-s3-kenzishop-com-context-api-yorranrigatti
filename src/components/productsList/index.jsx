import { useContext } from "react";
import { CartContext } from "../../providers/cartProducts";
import { ProductsContext } from "../../providers/products";
import { ProductCard } from "../productCard";
import { Container } from "./styles";

export const ProductsList = () => {
  const { products } = useContext(ProductsContext);
  const { cart } = useContext(CartContext)
  console.log(cart);
  return (
    <Container>
      {products.map((product, index) => (
        <ProductCard product={product} key={index} />
      ))}
    </Container>
  );
};
