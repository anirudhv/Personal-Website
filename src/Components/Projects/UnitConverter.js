import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
const UnitConverter = (props) => (
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
		The Unit Converter Android application was created with <b>Java</b> and <b>XML</b>. 
		<br /><br />
		This application lets users convert between length, weight, and temperature units. 
		</Typography>
		<hr />
		<br />
		<div>
			<ButtonGroup variant="contained" aria-label="outlined primary button group">
				<Button href = "UnitConverter.apk" download variant="contained" endIcon={<FileDownloadIcon />}>
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
		<br />
	</>
);
export default UnitConverter;