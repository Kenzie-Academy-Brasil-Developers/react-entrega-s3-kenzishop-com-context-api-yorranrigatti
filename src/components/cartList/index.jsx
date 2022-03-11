import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { CartContext } from "../../providers/cartProducts";
import { CartProduct } from "../cartProduct";
import { Section } from "./styles";

export const CartList = () => {
  const { cart } = useContext(CartContext);

  const history = useHistory();

  return (
    <Section>
      <div>
        {cart.map((item) => (
          <CartProduct product={item} />
        ))}
      </div>
    </Section>
  );
};
