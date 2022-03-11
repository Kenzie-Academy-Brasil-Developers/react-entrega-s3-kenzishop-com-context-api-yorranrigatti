import { useContext } from "react";
import { CartHeader } from "../../components/cartHeader";
import { CartList } from "../../components/cartList";
import { EmptyCart } from "../../components/emptyCart";
import { ResumedCart } from "../../components/resumedCart";
import { CartContext } from "../../providers/cartProducts";
import { Container } from "./styles";

export const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <CartHeader />
      {cart.length === 0 ? (
        <Container>
          <EmptyCart />
        </Container>
      ) : (
        <Container>
          <CartList />
          <ResumedCart />
        </Container>
      )}
    </>
  );
};
