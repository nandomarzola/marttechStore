import {
  Container,
  AreaLayout,
  AreaAccess,
  AreaMyAccount,
  Title,
  AreaForms
} from "./styles";

import Register from "../../components/UI/Register";
import Login from "../../components/Login";
import MyAccount from "../../components/MyAccount";

export default () => {
  return (
    <Container>
      <AreaLayout>

        <AreaAccess>
          <Title>Acessar minha conta</Title>
          <AreaForms>
            <Register />
            <Login />
          </AreaForms>
        </AreaAccess>

        <AreaMyAccount>
        <Title>Minha Conta</Title>
          <AreaForms>
            <MyAccount />
          </AreaForms>
        </AreaMyAccount>
        
      </AreaLayout>
    </Container>
  );
};
