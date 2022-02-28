import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
const LocationTracker = (props) => (
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
		The Location Tracker Android application was created with <b>Java</b> and <b>XML</b>. As the application utilizes a
		<b> MySQL Database</b>, <b>SQL queries</b> are used to interact with the database.
		<br /><br />
		The Location Tracker Android app uses the Android device's GPS and rotational vector sensors to let users track their location as they move around. 
		The exact latitude and longtitude of their position as they move is stored in a database. All the paths that the user tracked will be shown as a
		red line in a Google Map when the "GPS Logs" button is pressed.
		<br /><br />
		Check out the demo video below to see the Location Tracker app in action.
		<br /><br />
		If you own an Android device, you can install the APK file on your device to use the app yourself.
		<br /><br />
		</Typography>
		<hr />
		<br />
		<div>
			<ButtonGroup variant="contained" aria-label="outlined primary button group">
				<Button href = "LocationTracker.apk" download variant="contained" endIcon={<FileDownloadIcon />}>
					Download Location Tracker APK File
				</Button>
				<Button href = "https://youtu.be/y6vNZhB5uoI" target = "_blank"variant="contained" endIcon={<YouTubeIcon />}>
					View Video Demo
				</Button>				
				<Button href = "https://github.com/anirudhv/LocationTracker" target = "_blank" variant="contained" endIcon={<GitHubIcon />}>
					View Code
				</Button>
			</ButtonGroup>
		</div>
		<br />
	</>
);
export default LocationTracker;