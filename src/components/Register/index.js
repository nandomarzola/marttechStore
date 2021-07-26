import { useHistory } from "react-router-dom";

import {
  Container,
  AreaLayout,
  TitleTop,
  TitleTextTop,
  TitleText,
  AreaRegister,
  TextDescription,
  Button,
} from "./styles";

export default () => {

  const history = useHistory();
  
  const routeChange = () => {
    history.push('/register');
  };

  return (
    <Container>
      <AreaLayout>
        <AreaRegister>
          <TitleTop>
            <TitleTextTop>Sou um novo cliente.</TitleTextTop>
          </TitleTop>
          <TitleText>Cadastrar-se (recomendado)</TitleText>
          <TextDescription>
            Ao cadastrar-se e criar uma conta você poderá comprar mais
            rapidamente, saber a situação de seus pedidos e acompanhar as
            compras já realizadas.
          </TextDescription>
        </AreaRegister>
        <Button onClick={routeChange}>Continuar</Button>
      </AreaLayout>
    </Container>
  );
};
