"use client"
import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ProjectPage from '../../Components/ProjectPage/ProjectPage';

const MP3Player = () => {
	const inner = (
		<div>
			<Typography variant = "body1" gutterBottom component = "div" align = "left" style = {{margin: "10px"}}>
			The MP3 Android application was created with <b>Java</b> and <b>XML</b>. 
			<br /><br />
			When the app is first launched, the MP3 player Android application creates a folder in the user's internal device storage where they can store MP3 files.
			Once there are MP3 files in the folder, the MP3 player app will play the music inside the folder.
			<br /><br />
			Users can change to different music in the playlist at any time and also forward and rewind to different parts of the music.
			<br /><br />
			</Typography>
			<hr />
			<br />
			<div>
				<ButtonGroup variant="contained" aria-label="outlined primary button group">
					<Button href = "/MP3Player.apk" download variant="contained" endIcon={<FileDownloadIcon />}>
						Download MP3 Player APK File
					</Button>
					<Button href = "https://www.youtube.com/watch?v=MP9W3Wdv8zo" target = "_blank"variant="contained" endIcon={<YouTubeIcon />}>
						View Video Demo
					</Button>				
					<Button href = "https://github.com/anirudhv/MP3-Player" target = "_blank" variant="contained" endIcon={<GitHubIcon />}>
						View Code
					</Button>
				</ButtonGroup>
			</div>
		</div>
	);
	return (
		<ProjectPage
			name="MP3 Player"
			content={inner}
		/>
	);
}

export default MP3Player;