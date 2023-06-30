"use client"
import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ProjectPage from '../../Components/ProjectPage/ProjectPage';

const MemoryChef = () => {
	const inner = (
		<div>
			<Typography variant = "body1" gutterBottom component = "div" align = "left" style = {{margin: "10px"}}>
			Memory Chef is a computer game I made from scratch with <b>C#</b> to manage
			the game logic and <b>XAML</b> to design the user interface. This game is a 
			<b>Windows Presentation Foundation (WPF)</b> application.
			<br /><br />
			The game requires users to memorize a pizza order in 45 seconds and then create the pizza
			from memory, by choosing the dough, sauce, cheese, and toppings. 
			The final score is calculated based on how close the created pizza is to the order. 
			Pizza orders are randomized so a new order will likely be given everytime a new game is played.
			<br /><br />
			Check out a video demo of the game below or download the game .exe file to play on your computer.
			</Typography>
			<hr />
			<br />
			<div>
				<ButtonGroup variant="contained" aria-label="outlined primary button group">
					<Button href = "/MemoryChef.exe" download variant="contained" endIcon={<FileDownloadIcon />}>
						Download Memory Chef Game 
					</Button>
					<Button href = "https://www.youtube.com/watch?v=MDw_2g2r36M" target = "_blank" variant="contained" endIcon={<YouTubeIcon />}>
						View Video Demo
					</Button>				
					<Button href = "https://github.com/anirudhv/Memory-Chef" target = "_blank" variant="contained" endIcon={<GitHubIcon />}>
						View Code
					</Button>
				</ButtonGroup>
			</div>
		</div>
	);
	return(
		<ProjectPage
			name="Memory Chef"
			content={inner}
		/>
	);
}


export default MemoryChef;