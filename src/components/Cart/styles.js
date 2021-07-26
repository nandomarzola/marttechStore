import styled  from 'styled-components';
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

export const Container = styled.div`
  width:100%;
  margin-top:20px;
`;

export const AreaLayout = styled.div`
  width:100%;
  border-bottom: 1px dashed #e0dcdc;
  padding-bottom: 20px;
`;

export const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor:'rgb(201 208 212);',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    backgroundColor:theme.palette.common.white,
  },
}))(TableCell);

export const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export const AreaButton = styled.div`
  width: 100%;
  display:flex;
  justify-content: space-between;
`;

export const ImageProduct = styled.img`
  width:100%;
  height:auto;
  padding:2px;
  box-shadow: 0 0 0.3em black;
`;

export const Button = styled.button`
  color:#FFF;
  display: flex;
  justify-content: center;
  font-weight: bold;
  align-items: center;
  border:0;
  background-color: rgb(13, 135, 54);
  margin-top:10px;
  padding:10px;
  height: 35px;
  &:hover  {
      background-color: rgb(43 47 51);
      transition-duration: 0.4s;
      transition-delay: 0.1s;
      opacity: 1;
  } 
`;

