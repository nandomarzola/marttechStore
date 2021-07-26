import { Switch } from "react-router-dom";
import Route from './Route';

import SingIn from '../screens/SingIn';
import SingUp from '../screens/SingUp';
import Home from '../screens/Home';
import Product from '../screens/Product';
import Cart from '../screens/Cart';

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/product" component={Product} />
      <Route exact path="/cart" component={Cart} />

      <Route exact path="/login" component={SingIn} />
      <Route exact path="/register" component={SingUp} />
    </Switch>
  )
};
