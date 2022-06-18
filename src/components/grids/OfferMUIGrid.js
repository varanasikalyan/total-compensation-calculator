import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { RECHARTS, yearGrouping } from '../mock/Mock';
import { PayRound } from '../common/Helper';

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{PayRound(row.Basic)}</TableCell>
        <TableCell align="right">{PayRound(row.Bonus)}</TableCell>
        <TableCell align="right">{PayRound(row.HRA)}</TableCell>
        <TableCell align="right">{PayRound(row["Special Allowance"])}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Monthly Breakup
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Month</TableCell>
                    <TableCell align="right">Basic</TableCell>
                    <TableCell align="right">Bonus</TableCell>
                    <TableCell align="right">HRA</TableCell>
                    <TableCell align="right">Special Allowance</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.Months.map((monthRow) => (
                    <TableRow key={monthRow.name}>
                      <TableCell component="th" scope="row">
                        {monthRow.name}
                      </TableCell>
                      <TableCell align="right">{PayRound(monthRow.Basic)}</TableCell>
                      <TableCell align="right">{PayRound(monthRow.Bonus)}</TableCell>
                      <TableCell align="right">{PayRound(monthRow.HRA)}</TableCell>
                      <TableCell align="right">{PayRound(monthRow["Special Allowance"])}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.string.isRequired,
    Basic: PropTypes.number.isRequired,
    Bonus: PropTypes.number.isRequired,
    Months: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        Basic: PropTypes.number.isRequired,
        Bonus: PropTypes.number.isRequired,
        HRA: PropTypes.number.isRequired,
        "Special Allowance": PropTypes.number.isRequired,
      }),
    ).isRequired,
    HRA: PropTypes.number.isRequired,
    "Special Allowance": PropTypes.number.isRequired,
  }).isRequired,
};

const rows = yearGrouping(RECHARTS.data);
export default function CompensationSummaryTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Year</TableCell>
            <TableCell align="right">Basic</TableCell>
            <TableCell align="right">Bonus</TableCell>
            <TableCell align="right">HRA</TableCell>
            <TableCell align="right">Special Allowance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
