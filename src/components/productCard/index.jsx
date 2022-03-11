import { Container } from "./styles";
import { useContext } from "react";
import { CartContext } from "../../providers/cartProducts";

export const ProductCard = ({ product }) => {

  const { addToCart } = useContext(CartContext)
  return (
    <Container>
      <img src={product.image} alt={product.name} />
      <p>{product.brand}</p>
      <p>{product.name}</p>
      <span>{`R$ ${product.price},00`}</span>
      <button onClick={() => addToCart(product)}>Adicionar ao carrinho</button>
    </Container>
  );
};
