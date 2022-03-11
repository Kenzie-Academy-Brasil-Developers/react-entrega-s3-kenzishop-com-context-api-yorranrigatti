import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { CartContext } from "../../providers/cartProducts";
import { Container } from "./styles";

export const ResumedCart = () => {
  const { cart, setCart } = useContext(CartContext);

  const totalPrice = cart.reduce((acc, cur) => {
    return acc + cur.price;
  }, 0);

  const history = useHistory();

  const handleClick = () => {
    toast.success("Compra realizada com sucesso");
    setCart([]);
    history.push("/");
  };

  return (
    <Container>
      <h2>Resumo</h2>
      <div>
        <span>Quantidade: {cart.length}</span>
        <span>Total: R$ {totalPrice},00</span>
      </div>
      <button onClick={handleClick}>Finalizar compra</button>
    </Container>
  );
};
