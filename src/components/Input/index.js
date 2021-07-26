
import {
  Container,
  Input
} from './styles';

export default ({type, style, value, disabled}) => {
  return (
    <Container>
      <Input type={type} style={style} value={value} disabled={disabled}/>
    </Container>
  )
}