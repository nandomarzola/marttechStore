import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import useApi from "../../services/useApi";

import {
  Container,
  AreaLayout,
  AreaImage,
  Image,
  AreaPurchase,
  TitleProduct,
  Value,
  AreaBuy,
  Button,
} from "./styles";

import FacaUrsus from "../../assets/facaUrsus.jpg";
import Input from "../../components/UI/Input";

export default () => {
  const { id } = useParams();
  const [product, setProduct] = useState();

  const [load] = useApi({
    url: `/products/${id}`,
    method: "get",
    onCompleted: (response) => {
      setProduct(response.data);
    },
  });

  useEffect(() => {
    if (id) {
      load();
    }
  }, [id]);

  return (
    <Container>
      {!product ? (
        <div>Carregando...</div>
      ) : (
        <AreaLayout>
          <AreaImage>
            <Image src={product.imageProduct} />
          </AreaImage>
          <AreaPurchase>
            <TitleProduct>{product.name}</TitleProduct>
            <Value>R$ {product.unitary}</Value>
            <AreaBuy>
              <Input
                style={{
                  width: "100px",
                  margin: "0 auto",
                  display: "block",
                  textAlign: "center",
                }}
                value="1"
              />
              <Button>Comprar</Button>
            </AreaBuy>
          </AreaPurchase>
        </AreaLayout>
      )}
    </Container>
  );
};
