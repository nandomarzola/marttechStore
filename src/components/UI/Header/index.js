import HeaderTop from "./HeaderTop";
import HeaderBottom from "./Menu";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import {
  Container,
  BodyHeader,
  Image,
  AreaLayout,
  AreaCart,
  AreaIcon,
  ToolTip,
} from "./styles";

import Input from "../Input";

import Logo from "../../../assets/logo.png";

export default () => {
  return (
    <Container>
      <HeaderTop />
      <BodyHeader>
        <AreaLayout>
          <Image src={Logo} alt="Logo loja" />
          <AreaCart>
            <Input
              style={{ 
                backgroundColor: "white",
                 borderRadius: "0",
                 textAlign:'right'
              }}
              disabled="true"
              value="0 item(ns) - R$  0,00"
            />
            <AreaIcon>
              <FontAwesomeIcon icon={faShoppingCart} size="xs" />
            </AreaIcon>
            <ToolTip>Clique para ver o carrinho</ToolTip>
          </AreaCart>
        </AreaLayout>
      </BodyHeader>
      <HeaderBottom />
    </Container>
  );
};
