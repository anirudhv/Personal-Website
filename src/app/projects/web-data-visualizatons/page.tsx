"use client"
import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import ProjectPage from '../../Components/ProjectPage/ProjectPage';

const WebDataVisualizations = () => {
	const inner = (
		<div>
			<Typography variant = "body1" gutterBottom component = "div" align = "left" style = {{margin: "10px"}}>
				All of the data visualizations are visually representing real world data. 
				<br /><br />
				The data visualizations were created with either <b>HTML</b>, <b>Vanilla JavaScript</b>, <b>jQuery</b>, or the <b>D3 JavaScript library</b>.
			</Typography>
			<hr />
			<br />
			<div>
				<ButtonGroup variant="contained" aria-label="outlined primary button group">
					<Button href = "https://htmljsviz.netlify.app/" target="_blank" variant="contained" endIcon={<OpenInNewIcon />}>
						View Data Visualizations
					</Button>
					<Button href = "https://github.com/anirudhv/Web-Data-Visualizations" target = "_blank" variant="contained" endIcon={<GitHubIcon />}>
						View Code
					</Button>
				</ButtonGroup>
			</div>
		</div>
	);
	return (
		<ProjectPage
			name="HTML and JavaScript Data Visualizations"
			content={inner}
		/>
	);
}

export default WebDataVisualizations;