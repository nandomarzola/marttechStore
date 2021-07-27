import {
  Container,
  AreaLayout,
  AreaImage,
  Image,
  AreaPurchase,
  TitleProduct,
  Value,
  AreaBuy,
  Button
} from "./styles";

import FacaUrsus from "../../assets/facaUrsus.jpg";
import Input from '../../components/UI/Input';

export default () => {
  return (
    <Container>
      <AreaLayout>
        <AreaImage>
          <Image src={FacaUrsus} />
        </AreaImage>
        <AreaPurchase>
          <TitleProduct>
            Faca Ursus (★) | Doppler Fase 2 FN Float 0.032
          </TitleProduct>
          <Value>R$ 1.900,00</Value>
          <AreaBuy>
            <Input style={{ 
              width: '100px', 
              margin: '0 auto', 
              display: 'block',
              textAlign: 'center' 
              }} value="1" />
            <Button>Comprar</Button>
          </AreaBuy>
        </AreaPurchase>
      </AreaLayout>
    </Container>
  );
};
