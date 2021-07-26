import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { Container, AreaList, Ul, Li, TextLi } from "./styles";

export default () => {
  return (
    <Container>
      <AreaList>
        <Ul>
          <Li>
            <FontAwesomeIcon icon={faChevronRight} size="xs" />
            <TextLi>Acessar</TextLi>
          </Li>
          <Li>
            <FontAwesomeIcon icon={faChevronRight} size="xs" />
            <TextLi>Cadastrar</TextLi>
          </Li>
          <Li>
            <FontAwesomeIcon icon={faChevronRight} size="xs" />
            <TextLi>Acessar</TextLi>
          </Li>
          <Li>
            <FontAwesomeIcon icon={faChevronRight} size="xs" />
            <TextLi>Esqueceu a senha?</TextLi>
          </Li>
          <Li>
            <FontAwesomeIcon icon={faChevronRight} size="xs" />
            <TextLi>Minha Conta</TextLi>
          </Li>
          <Li>
            <FontAwesomeIcon icon={faChevronRight} size="xs" />
            <TextLi>Lista de Desejos</TextLi>
          </Li>
          <Li>
            <FontAwesomeIcon icon={faChevronRight} size="xs" />
            <TextLi>Histórico de Pedidos</TextLi>
          </Li>
        </Ul>
      </AreaList>
    </Container>
  );
};
