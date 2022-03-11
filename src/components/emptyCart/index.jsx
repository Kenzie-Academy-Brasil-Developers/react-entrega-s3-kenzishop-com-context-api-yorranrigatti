import { Link } from "react-router-dom";
import { Container } from "./styles";

export const EmptyCart = () => {
  return (
    <Container>
          <h2>Seu carrinho está vazio</h2>
          <Link to="/">Continuar comprando</Link>
    </Container>
  );
};
