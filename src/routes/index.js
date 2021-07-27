import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import StoreProvider from "../Context/Provider";
import RoutesPrivate from "./Private";

import SingIn from "../screens/SingIn";
import SingUp from "../screens/SingUp";
import Home from "../screens/Home";
import Product from "../screens/Product";
import Cart from "../screens/Cart";

export default () => {
  return (
    <Router>
      <StoreProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/product/:id" component={Product} />
          <Route exact path="/cart" component={Cart} />

          <Route exact path="/login" component={SingIn} />
          <RoutesPrivate exact path="/register" component={SingUp} />
        </Switch>
      </StoreProvider>
    </Router>
  );
};
