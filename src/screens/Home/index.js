import { Container, AreaLayout, TitleShowCase } from "./styles";

import SpotLight from "../../components/SpotLight";
import ShowCase from "../../components/ShowCase";

export default () => {
  return (
    <Container>
      <SpotLight />
      <AreaLayout>
        <TitleShowCase>Produtos</TitleShowCase>
        <ShowCase />
      </AreaLayout>
    </Container>
  );
};
