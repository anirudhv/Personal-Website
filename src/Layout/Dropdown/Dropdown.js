import React, {useState} from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Typography} from '@material-ui/core';
import {Add, Close} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const Dropdown = (props) => {
	const classes = useStyles();
	const [expanded, setExpanded] = useState(false);
	const[icon, setIcon] = useState(<Add />);
	const lines = props.description.split('•');

	const handleChange = (panel) => (event, isExpanded) => {
	setExpanded(isExpanded ? panel : false);
	setIcon(isExpanded ? <Close /> : <Add />);
	}

  return (
    <div className={classes.root}>
      <Accordion expanded={expanded === props.key} onChange={handleChange(props.key)}>
        <AccordionSummary
          expandIcon={icon}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className = {classes.heading}>{props.name}</Typography>
          <Typography className = {classes.secondaryHeading}>{props.date}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul>
            {lines.slice(1).map(line => (
            	<li>{line}</li>
            ))}
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  ); 
}
export default Dropdown;