"use client"
import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import ProjectPage from '../../Components/ProjectPage/ProjectPage';

const PurdueApps = () => {
	const inner = (
		<div>
			<Typography variant = "body1" gutterBottom component = "div" align = "left" style = {{margin: "10px"}}>
				Purdue Apps is a front-end website created with <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, and the <b>Twitter Bootstrap framework</b>.
				<br /><br />
				The website showcases mobile applications that are useful for Purdue University students to have.
				<br /><br />
				The project was created with a classmate.
			</Typography>
			<hr />
			<br />
			<div>
				<ButtonGroup variant="contained" aria-label="outlined primary button group">
					<Button href = "https://purdueapps.netlify.app/" target="_blank" variant="contained" endIcon={<OpenInNewIcon />}>
						View Purdue Apps Website
					</Button>
					<Button href = "https://github.com/anirudhv/Purdue-Apps" target = "_blank" variant="contained" endIcon={<GitHubIcon />}>
						View Code
					</Button>
				</ButtonGroup>
			</div>
		</div>
	);
	return (
		<ProjectPage
			name="Purdue Apps"
			content={inner}
		/>
	);
}

export default PurdueApps;