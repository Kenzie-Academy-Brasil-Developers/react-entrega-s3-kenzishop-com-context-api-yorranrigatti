import { Route, Switch } from "react-router-dom";
import { Cart } from "../pages/cart";
import { Home } from "../pages/home";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
    </Switch>
  );
};
