import { Container, AreaLayout, ShowCase, Image, Title, Value } from "./styles";

export default ({ loading, error, products }) => {
  if (error) {
    return <div>Algo de errado não está certo</div>;
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
            <Value>R$ {product.unitary}</Value>
          </ShowCase>
        ))}
      </AreaLayout>
    </Container>
  );
};
