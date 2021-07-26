import {
  Container,
  AreaLayout,
  AreaAccess,
  AreaMyAccount,
  Title,
  AreaForms
} from "./styles";

import RegisterForm from "../../components/RegisterForm";
import MyAccount from "../../components/MyAccount";

export default () => {
  return (
    <Container>
      <AreaLayout>

        <AreaAccess>
          <Title>Cadastrar Conta</Title>
          <AreaForms>
            <RegisterForm />
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
