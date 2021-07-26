import {
  Container,
  AreaLayout,
  TitleTop,
  TitleTextTop,
  AreaRegister,
  TextDescription,
  Button,
  AreaInputs,
  Label,
  Link
} from "./styles";

import Input from '../Input';

export default () => {
  return (
    <Container>
      <AreaLayout>
        <AreaRegister>
          <TitleTop>
            <TitleTextTop>Já sou cliente.</TitleTextTop>
          </TitleTop>
          <TextDescription>
            Digite abaixo seu e-mail e senha já cadastrados na loja.
          </TextDescription>
          <AreaInputs>
            <Label>Seu e-mail</Label>
            <Input type="text" />
            <Label>Sua Senha</Label>
            <Input type="password"/>
            <Link>Esqueceu sua senha?</Link>
          </AreaInputs>
        </AreaRegister>
        <Button>Continuar</Button>
      </AreaLayout>
    </Container>
  );
};
