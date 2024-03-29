"use client"
import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ProjectPage from '../../Components/ProjectPage/ProjectPage';

const UnitConverter = () => {
	const inner = (
		<div>
			<Typography variant = "body1" gutterBottom component = "div" align = "left" style = {{margin: "10px"}}>
			The Unit Converter Android application was created with <b>Java</b> and <b>XML</b>. 
			<br /><br />
			This application lets users convert between length, weight, and temperature units. 
			</Typography>
			<hr />
			<br />
			<div>
				<ButtonGroup variant="contained" aria-label="outlined primary button group">
					<Button href = "/UnitConverter.apk" download variant="contained" endIcon={<FileDownloadIcon />}>
						Download Unit Converter APK File
					</Button>
					<Button href = "https://www.youtube.com/watch?v=W_0rxoQa-Ks" target = "_blank"variant="contained" endIcon={<YouTubeIcon />}>
						View Video Demo
					</Button>				
					<Button href = "https://github.com/anirudhv/Unit-Converter" target = "_blank" variant="contained" endIcon={<GitHubIcon />}>
						View Code
					</Button>
				</ButtonGroup>
			</div>
		</div>
	);
	return (
		<ProjectPage
			name="Unit Converter"
			content={inner}
		/>
	);
}

export default UnitConverter;