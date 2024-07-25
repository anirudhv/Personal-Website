"use client"
import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ProjectPage from '../../Components/ProjectPage/ProjectPage';

const StabilityGPT = () => {
	const inner = (
		<div>
			<Typography variant = "body1" gutterBottom component = "div" align = "left" style = {{margin: "10px"}}>
				For my Masters thesis, I wanted to see if I could engineer prompts for image generation artificial intelligence models such that the style, characters, and all visual elements were consistent across multiple images.
				<br /><br />
				To show the results of my research, I created an AI storybook generator that generates a children's story from a user prompt. The generated stories contain both text and also images for each page. You can read my thesis to learn more about my research motivations, project execution, and research findings.
			</Typography>
			<hr />
			<br />
			<div>
				<ButtonGroup variant="contained" aria-label="outlined primary button group">
					<Button href = "https://escholarship.org/uc/item/0cs5c52m" target="_blank" variant="contained" endIcon={<OpenInNewIcon />}>
					 Thesis
					</Button>
				</ButtonGroup>
			</div>
		</div>
	);
	return (
		<ProjectPage
			name="stability.gpt"
			content={inner}
		/>
	);
}

export default StabilityGPT;