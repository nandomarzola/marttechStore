import { Container, Link, TextLink, AreaLayout } from "./styles";

export default () => {
  return (
    <Container>
      <AreaLayout>
        <Link style={{borderLeft:'1px dashed #403e3e'}}>
          <TextLink>ÍNICIO</TextLink>
        </Link>
        <Link>
          <TextLink>INFORMAÇÕES</TextLink>
        </Link>
        <Link>
          <TextLink> COUNTER STRIKE:GO</TextLink>
        </Link>
        <Link>
          <TextLink>DOTA 2</TextLink>
        </Link>
        <Link>
          <TextLink>CONTATO</TextLink>
        </Link>
      </AreaLayout>
    </Container>
  );
};
