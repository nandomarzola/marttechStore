import {
  Container,
  AreaLayout,
  AreaMenu,
  AreaAccess,
  Link,
} from "./styles";

export default () => {
  return (
    <Container>
      <AreaLayout>
        <AreaMenu>
          <Link>Princiapal</Link>
          <Link>Minha Conta</Link>
          <Link>Meu Carrinho</Link>
          <Link>Finalizar Pedido</Link>
        </AreaMenu>

        <AreaAccess>
          <Link>Acessar/Cadastrar</Link>
          <Link>Cadastrar</Link>
        </AreaAccess>
      </AreaLayout>
    </Container>
  );
};
