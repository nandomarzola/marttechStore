import { useState, useContext } from "react";

import StoreContext from "../../Context/Context";
import { useHistory } from "react-router-dom";

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
  Link,
  Input,
} from "./styles";

function initialState() {
  return { email: "", password: "" };
}

function login({ email, password }) {
  if (email === "email@gmail.com" && password === "1234") {
    return { token: "1234" };
  }
  return { error: "Usuário ou senha inválido" };
}

export default () => {
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState(null);
  const { setToken } = useContext(StoreContext);
  const history = useHistory();

  console.log(setToken);

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  function onSubmit(event) {
    event.preventDefault();
    const { token, error } = login(values);

    if (token) {
      setToken(token);
      return history.push("/");
    }
    setError(error);
    setValues(initialState);
  }

  return (
    <Container>
      <AreaLayout onSubmit={onSubmit}>
        <AreaRegister>
          <TitleTop>
            <TitleTextTop>Já sou cliente.</TitleTextTop>
          </TitleTop>
          <TextDescription>
            Digite abaixo seu e-mail e senha já cadastrados na loja.
          </TextDescription>
          <AreaInputs>
            <Label>Seu e-mail</Label>
            <Input
              id="email"
              type="text"
              name="email"
              onChange={onChange}
              value={values.email}
            />
            <Label>Sua Senha</Label>
            <Input
              id="password"
              type="password"
              name="password"
              onChange={onChange}
              value={values.password}
            />
            <Link>Esqueceu sua senha?</Link>
            {error && <div>{error}</div>}
          </AreaInputs>
        </AreaRegister>
        <Button type="submit">Continuar</Button>
      </AreaLayout>
    </Container>
  );
};
