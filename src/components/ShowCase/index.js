import { Container, AreaLayout, ShowCase, Image, Title, Value } from "./styles";

import { formatPrice } from '../../util/format';

export default ({ loading, error, products }) => {
  if (error) {
    return <div>Opss, algo deu errado</div>;
  }

  if (loading || products === null) {
    return <div>Carregando...</div>;
  }

  if (products.length === 0) {
    return <div>Nenhum resultado encontrado</div>;
  }
  return (
    <Container>
      <AreaLayout>
        {products.map((product) => (
          <ShowCase key={product.id} href={`/product/${product.id}`}>
            <Image src={product.imageShowCase} alt={product.name} />
            <Title>
              {product.name}
            </Title>
            <Value>R$ {formatPrice(product.unitary)}</Value>
          </ShowCase>
        ))}
      </AreaLayout>
    </Container>
  );
};
