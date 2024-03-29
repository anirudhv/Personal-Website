"use client"
import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ProjectPage from '../../Components/ProjectPage/ProjectPage';

const TornadoSimulation = () => {
	const inner = (
		<div>
			<Typography variant = "body1" gutterBottom component = "div" align = "left" style = {{margin: "10px"}}>
				Using three vector-valued datasets of a tornado, sand dune, and a motorbike rider, I used <b>Paraview</b> to 
				create an animation that shows the motorbike rider and the sand dune he is riding on get sucked away by
				the tornado.
				<br /><br />
				You can view my pipeline browser and Animation View in Paraview below to get an overview as to how I made the
				animation. You can also check out the final product animation.  
			</Typography>
			<hr />
			<br />
			<div>
				<ButtonGroup variant="contained" aria-label="outlined primary button group">
					<Button href = "https://youtu.be/5Amt_0imzQM" target = "_blank" variant="contained" endIcon={<YouTubeIcon />}>
						View Animation
					</Button>
				</ButtonGroup>
				<br />
				<img src = "/TornadoBoard.jpg" alt = "Reference Images" width = "75%" />
				<Typography variant = "caption" gutterBottom component = "div" align = "center" style = {{margin: "10px"}}>
					My Pipeline Browser and Animation View for this Project in Paraview
				</Typography>
			</div>
		</div>
	);
	return (
		<ProjectPage
			name="Realistic Tornado Simulation Visualization"
			content={inner}
		/>
	);
}

export default TornadoSimulation;