import { Container, AreaLayout, TitleCart } from "./styles";

import Cart from '../../components/Cart';

export default () => {
  return (
    <Container>
      <AreaLayout>
        <TitleCart>Meu Carrinho</TitleCart>
        <Cart />
      </AreaLayout>
    </Container>
  );
};
