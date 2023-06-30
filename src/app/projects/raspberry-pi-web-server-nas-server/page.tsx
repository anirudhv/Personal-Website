"use client"
import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ProjectPage from '../../Components/ProjectPage/ProjectPage';

const RaspberryPi = () => {
	const inner = (
		<div>
			<Typography variant = "body1" gutterBottom component = "div" align = "left" style = {{margin: "10px"}}>
			The video demo for this project includes the connection of the project to the Raspberry Pi architecture, the tutorials used to complete the project, troubleshooting information, a demo of the project, and a reflection.
			</Typography>
			<hr />
			<br />
			<div>
				<ButtonGroup variant="contained" aria-label="outlined primary button group">
					<Button href = "https://www.youtube.com/watch?v=9fGGXdg-iaI" target = "_blank"variant="contained" endIcon={<YouTubeIcon />}>
						View Video Demo
					</Button>				
				</ButtonGroup>
			</div>
		</div>
	);
	return (
		<ProjectPage
			name="Raspberry Pi Web Server and NAS Server"
			content={inner}
		/>
	);
}

export default RaspberryPi;