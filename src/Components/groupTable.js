import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 12,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(Pais, Jugados, Ganados, Empatados, Perdidos, Goles_a_Favor, Goles_en_Contra, Puntos) {
  return { Pais, Jugados, Ganados, Empatados, Perdidos, Goles_a_Favor, Goles_en_Contra, Puntos };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Pais</StyledTableCell>
            <StyledTableCell align="right">Jugados</StyledTableCell>
            <StyledTableCell align="right">Ganados</StyledTableCell>
            <StyledTableCell align="right">Empatados</StyledTableCell>
            <StyledTableCell align="right">Perdidos</StyledTableCell>
            <StyledTableCell align="right">Goles a Favor</StyledTableCell>
            <StyledTableCell align="right">Goles en Contra</StyledTableCell>
            <StyledTableCell align="right">Puntos</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((props) => (
            <StyledTableRow key={props.team_name}>
              <StyledTableCell component="th" scope="row">
                {props.team_name}
              </StyledTableCell>
              <StyledTableCell align="right">{props.games_played}</StyledTableCell>
              <StyledTableCell align="right">{props.wins}</StyledTableCell>
              <StyledTableCell align="right">{props.draws}</StyledTableCell>
              <StyledTableCell align="right">{props.losses}</StyledTableCell>
              <StyledTableCell align="right">{props.goals_for}</StyledTableCell>
              <StyledTableCell align="right">{props.goals_against}</StyledTableCell>
              <StyledTableCell align="right">{props.points}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
