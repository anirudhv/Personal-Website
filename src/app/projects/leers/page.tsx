"use client"
import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import ProjectPage from '../../Components/ProjectPage/ProjectPage';

const Leers = () => {
	const inner = (
		<div>
			<Typography variant = "body1" gutterBottom component = "div" align = "left" style = {{margin: "10px"}}>
				Leers is an online browser game that I created using <b>React.js</b> on the front-end and <b>Node.js/Express.js</b> for the backend server.
				<br /><br />
				Leers is a game where players are given a set of 1-2 starting and ending letters. Given this, they need to guess as many words as they can. The player can give up at any time and all remaining words will be revealed to them. 
				<br /><br />
				There are currently two game modes -
				<ul>
					<li><b>Daily:</b> This game mode can be played once a day. All players are given the same starting and ending letters.</li>
					<li><b>Unlimited:</b> Users can play the game infinitely with this game mode. Starting and ending letters are randomly generated each time.</li>
				</ul>	
			</Typography>
			<hr />
			<br />
			<div>
				<ButtonGroup variant="contained" aria-label="outlined primary button group">
					<Button href = "https://leers.netlify.app/" target="_blank" variant="contained" endIcon={<OpenInNewIcon />}>
						View Purdue Apps Website
					</Button>
					<Button href = "https://github.com/anirudhv/leers" target = "_blank" variant="contained" endIcon={<GitHubIcon />}>
						View Frontend Code
					</Button>
					<Button href = "https://github.com/anirudhv/leers-server" target = "_blank" variant="contained" endIcon={<GitHubIcon />}>
						View Server Code
					</Button>
				</ButtonGroup>
			</div>
		</div>
	);
	return (
		<ProjectPage
			name="Leers"
			content={inner}
		/>
	);
}

export default Leers;