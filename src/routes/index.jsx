import { Switch, Route } from "react-router";
import Products from "../pages/Products";
import CartPage from "../pages/Cart";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Products />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
