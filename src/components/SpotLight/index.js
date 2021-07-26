
import  {
  Container,
  Image
} from './styles';

import SpotLight from '../../assets/destaque.png';

export default () => {
  return (
    <Container>
        <Image src={SpotLight} alt="Imagem destaque" />
    </Container>
  )
}