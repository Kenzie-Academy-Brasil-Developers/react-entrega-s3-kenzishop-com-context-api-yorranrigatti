import { useHistory } from "react-router-dom";
import { Button } from "../button";
import { Container } from "./styles";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgEnter } from "react-icons/cg";

export const Header = () => {
  const history = useHistory();

  return (
    <Container>
      <h2>Kenzie Shop</h2>
      <div>
        <Button
          icon={AiOutlineShoppingCart}
          onClick={() => history.push("/cart")}
        >
          Ver carrinho
        </Button>
      </div>
    </Container>
  );
};
