"use client"
import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import ProjectPage from '../../Components/ProjectPage/ProjectPage';

const CulinaryClicks = () => {
	const inner = (
		<div>
			<Typography variant = "body1" gutterBottom component = "div" align = "left" style = {{margin: "10px"}}>
			Culinary Clicks is a full-stack image gallery with food-related photos that those with
			user accounts can contribute to. I created it with <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>,
			<b>jQuery</b>, and the <b>Twitter Bootstrap framework</b> on the frontend and <b>PHP</b> on the backend. Additionally, all
			data related to user accounts and the food photos themselves are stored in a <b>MySQL database</b>,
			which is accessed with <b>SQL queries</b> written on the backend with PHP.
			<br /><br />
			There are three different types of accounts that users can make on this website:
			<br /><br />
			<b>User:</b> This is the most basic kind of account. Users with this account can only view
			images in the image gallery, just like those who are not logged in to any account. There is ultimately
			no difference between what users with this account type and those without any account are able to do
			in Culinary Clicks.
			<br />
			<b>Cuisine Admin:</b> When signing up for an account, users have the option to become an admin for a specific image category. 
			As this is a food image gallery website, the images are categorized based on their cuisine of food, which means that
			users can choose to become a Mexican Cuisine Admin or Indian Cuisine Admin as an example. With this account type,
			users can upload, delete, and update captions of images in the cuisine they are an admin of.
			<br />
			<b>Super Admin:</b> This is the highest account type available. Users with this account can upload, delete, and update captions for
			any image category. They can also add new cuisine categories and delete exisiting cuisine categories. Finally,
			they can manage other users that are not also Super Admins. This includes changing which cuisine a Cuisine Admin is adminstrator of,
			creating a new user account of type User or Cuisine Admin, or deleting an existing User or Cuisine Admin user account.
			<br /><br />
			Currently, all user accounts are free so that all the website's features are easily accessible to those who view it. Likewise,
			all the images in the image gallery are free to download.
			</Typography>
			<hr />
			<br />
			<div>
				<ButtonGroup variant="contained" aria-label="outlined primary button group">
					<Button href = "http://165.22.191.102/project02/index.php" target="_blank" variant="contained" endIcon={<OpenInNewIcon />}>
						View Culinary Clicks Website
					</Button>
					<Button href = "https://github.com/anirudhv/Culinary-Clicks-Image-Gallery" target = "_blank" variant="contained" endIcon={<GitHubIcon />}>
						View Code
					</Button>
				</ButtonGroup>
			</div>
		</div>
	);
	return (
		<ProjectPage
			name="BadFellas"
			content={inner}
		/>
	);
}

export default CulinaryClicks;