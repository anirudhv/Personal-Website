import React, {useState} from 'react';
import Papa from 'papaparse';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Spinner from '../Spinner/Spinner';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const Skills = () => {
	const[data, setData] = useState([]);
  const[loading, setLoading] = useState(true);
	Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vQbQo5qr_XthvuHlPlrsWJ2K78AmXHfP93gfX4QY60XvMYCpZ2ebk7gzgZeKCkAIrcu98dOwwAl_HfN/pub?output=csv", {
		download:true,
		header:true,
		complete:(results) => {
      setLoading(false);
			setData(results.data);
		}});
  if(loading) {
    return <Spinner />;
  }
	return (
    <TableContainer component={Paper} styles = {{overflow: 'scroll'}}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Backend Lanaguages</StyledTableCell>
            <StyledTableCell align="left">Frontend Languages</StyledTableCell>
            <StyledTableCell align="left">Frameworks/Libraries</StyledTableCell>
            <StyledTableCell align="left">Deployments</StyledTableCell>
            <StyledTableCell align="left">Software Tools</StyledTableCell>
            <StyledTableCell align="left">Software Testing</StyledTableCell>
            <StyledTableCell align="left">Graphics</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {data.map((row, i) => (
        	<StyledTableRow key={i}>
        	  <StyledTableCell align="left">{row.Backend}</StyledTableCell>
              <StyledTableCell align="left">{row.Frontend}</StyledTableCell>
              <StyledTableCell align="left">{row.Frameworks}</StyledTableCell>
              <StyledTableCell align="left">{row.Deployments}</StyledTableCell>
              <StyledTableCell align="left">{row.Tools}</StyledTableCell>
              <StyledTableCell align="left">{row.Testing}</StyledTableCell>
              <StyledTableCell align="left">{row.Graphics}</StyledTableCell>
            </StyledTableRow>
        	))}
       </TableBody>
      </Table>
    </TableContainer>
	);
}

export default Skills;