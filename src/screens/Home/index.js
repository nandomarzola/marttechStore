import { useEffect } from "react";
import { Container, AreaLayout, TitleShowCase } from "./styles";

import SpotLight from "../../components/UI/SpotLight";
import ShowCase from "../../components/ShowCase";

import useApi from '../../services/useApi';

export default () => {

  const [load, loadInfo] = useApi({
    url: '/products',
    method: 'get',
    params: {
      _order: 'desc',
      _sort: 'id',
    },
  });

  useEffect(() => {
    load();
  }, []);

  return (
    <Container>
      <SpotLight />
      <AreaLayout>
        <TitleShowCase>Produtos</TitleShowCase>
        <ShowCase 
         products={loadInfo.data}
         loading={loadInfo.loading}
         error={loadInfo.error}
        />
      </AreaLayout>
    </Container>
  );
};
