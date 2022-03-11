import { useContext } from "react";
import { CartContext } from "../../providers/cartProducts";
import { Container } from "./styles";
import { GoTrashcan } from "react-icons/go";

export const CartProduct = ({ product }) => {
  const { removeFromCart } = useContext(CartContext);
  return (
    <Container>
      <figure>
        <img src={product.image} alt={product.name} />
      </figure>
      <div>
        <p>{product.brand}</p>
        <span>{product.name}</span>
        <span>R$ {product.price},00</span>
      </div>
      <button onClick={() => removeFromCart(product)}>
        <GoTrashcan />
      </button>
    </Container>
  );
};
