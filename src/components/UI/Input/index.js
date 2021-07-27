
import {
  Container,
  Input
} from './styles';

export default ({type, style}) => {
  return (
    <Container>
      <Input type={type} style={style}  />
    </Container>
  )
}