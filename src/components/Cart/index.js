import {
  Container,
  AreaLayout,
  AreaButton,
  Button,
  StyledTableCell,
  StyledTableRow,
  useStyles,
  ImageProduct,
} from "./styles";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function createData(url, name, model, amount, unitary, total) {
  return { url, name, model, amount, unitary, total };
}

const rows = [
  createData(
    "http://www.neshastore.com/image/cache/data/CSGO-Imagens/2021/M9/MW/1/Baioneta M9  Massacre MW 0.0883-47x47.jpg",
    "Baioneta M9 (★) | Massacre MW Float 0.088",
    "CSGO-Faca",
    1,
    2480.0,
    2480.0
  ),
];

export default () => {
  const classes = useStyles();

  return (
    <Container>
      <AreaLayout>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell width="100">Imagem</StyledTableCell>
                <StyledTableCell align="center">Produto</StyledTableCell>
                <StyledTableCell align="center">Modelo</StyledTableCell>
                <StyledTableCell align="center">Quantidade</StyledTableCell>
                <StyledTableCell align="center">Unitário</StyledTableCell>
                <StyledTableCell align="center">Total</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    <ImageProduct src={row.url} />
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.name}</StyledTableCell>
                  <StyledTableCell align="center">{row.model}</StyledTableCell>
                  <StyledTableCell align="center">{row.amount}</StyledTableCell>
                  <StyledTableCell align="center">{row.unitary}</StyledTableCell>
                  <StyledTableCell align="center">{row.total}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </AreaLayout>
      <AreaButton>
        <Button>Continuar Comprando</Button>
        <Button>Finalizar Compra</Button>
      </AreaButton>
    </Container>
  );
};
