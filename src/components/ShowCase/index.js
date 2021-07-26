import { Container, AreaLayout, ShowCase, Image, Title, Value } from "./styles";

import produto1  from '../../assets/produto1.jpg';

export default () => {

  function handleProduct(id){
    window.location = `product/${id}`;
  }

  return (
    <Container>
      <AreaLayout>
        <ShowCase>
          <Image src={produto1} alt="Produto 1" />
          <Title>
            AWP | Descarga Elétrica FN Float 0.015 com Fallen Dourado
          </Title>
          <Value>R$ 1.825,00</Value>
        </ShowCase>
      </AreaLayout>
    </Container>
  );
};
