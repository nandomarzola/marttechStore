import { useHistory } from "react-router-dom";

import {
  Container,
  AreaLayout,
  TitleTop,
  TitleTextTop,
  TextMsg,
  AreaRegister,
  Label,
  ComponentButton,
  Button,
} from "./styles";

import Input from '../../components/Input';

export default () => {
  const history = useHistory();

  const routeChange = () => {
    history.push("/register");
  };

  return (
    <Container>
      <AreaLayout>
        <TextMsg>
          Se você já se cadastrou acesse sua conta clicando aqui.
        </TextMsg>
        <TitleTop>
          <TitleTextTop>Informe seus dados</TitleTextTop>
        </TitleTop>
        <TextMsg>Campos marcados com * são obrigatórios.</TextMsg>
        <AreaRegister>
          <Label>*Nome</Label>
          <Input type="text"/>
        </AreaRegister>
        <AreaRegister>
          <Label>*E-mail</Label>
          <Input type="text"/>
        </AreaRegister>
        <TitleTop>
          <TitleTextTop>Senha para acesso</TitleTextTop>
        </TitleTop>
        <AreaRegister>
          <Label>*Senha</Label>
          <Input type="password"/>
        </AreaRegister>
        <AreaRegister>
          <Label>*Repitr senha</Label>
          <Input type="password"/>
        </AreaRegister>
      </AreaLayout>
      <ComponentButton>
          <Button>CRIAR MINHA CONTA</Button>
      </ComponentButton>
    </Container>
  );
};
