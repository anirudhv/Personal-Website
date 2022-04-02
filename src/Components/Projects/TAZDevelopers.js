import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';

const TAZDevelopers = (props) => (
	<>
		<Typography variant = "h4" gutterBottom component = "div">
			{props.name} 
		</Typography>
		<Typography variant = "h5" gutterBottom component = "div">
			{props.category + " Project"} 
		</Typography>
		<hr />
		<Typography variant = "h6" gutterBottom component = "div">
		About the Project
		</Typography>
		<Typography variant = "body1" gutterBottom component = "div" align = "left" style = {{margin: "10px"}}>
			The TAZ Developers team website is a team website I created for my undergraduate senior year project group.
			The website advertises my team and the main project we are working on.
			<br /><br />
			Despite the actual project being a team project, the team website was created completely on my own.
			<br /><br />
			The website is a single-page front-end website created with <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, and <b>jQuery</b>.
			Unlike many other websites that I have created, all CSS styles in this website were made completely on my own without any additional
			frameworks or libaries, making this website a strong showcase of my CSS skills.
		</Typography>
		<hr />
		<br />
		<div>
			<ButtonGroup variant="contained" aria-label="outlined primary button group">
				<Button href = "https://www.tazdevelopers.com/#home" target="_blank" variant="contained" endIcon={<OpenInNewIcon />}>
					View TAZ Developers Team Website
				</Button>
				<Button href = "https://github.com/anirudhv/BoilerBuilderWebsite" target = "_blank" variant="contained" endIcon={<GitHubIcon />}>
					View Code
				</Button>
			</ButtonGroup>
		</div>
		<br />
	</>
);
export default TAZDevelopers;