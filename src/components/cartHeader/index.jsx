import { useHistory } from "react-router-dom";
import { ProductsHeader } from "../cartList/styles";

export const CartHeader = () => {
  const history = useHistory();
  return (
    <ProductsHeader>
      <button onClick={() => history.push("/")}>Kenzie Shop</button>
      <h2>MEU CARRINHO</h2>
    </ProductsHeader>
  );
};
