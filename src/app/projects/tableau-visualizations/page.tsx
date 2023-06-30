"use client"
import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ProjectPage from '../../Components/ProjectPage/ProjectPage';

const TableauVisualizations = () => {
	const inner = (
		<div>
			<Typography variant = "body1" gutterBottom component = "div" align = "left" style = {{margin: "10px"}}>
			Throughout my academic and professional career, I have worked on many data visualization projects with <b>Tableau</b>.
			This project showcases my proficient understanding of the data visualization process and Tableau. 
			It is a sub-portfolio that contains
				<li>
					<ul>Worksheets I have completed</ul>
					<ul>Postcards I have designed</ul>
					<ul>Research projects I have completed to provide insights on different topics</ul>
					<ul>Some of the best Tableau visualizations I have created</ul>
				</li>
			</Typography>
			<hr />
			<br />
			<div>
				<ButtonGroup variant="contained" aria-label="outlined primary button group">
					<Button href = "https://portfolium.com/anirudhv/portfolio" target="_blank" variant="contained" endIcon={<OpenInNewIcon />}>
						View Data Visualization Sub-Portfolio
					</Button>
				</ButtonGroup>
			</div>
		</div>
	);
	return (
		<ProjectPage
			name="Tableau Visualizations"
			content={inner}
		/>
	);
}

export default TableauVisualizations;