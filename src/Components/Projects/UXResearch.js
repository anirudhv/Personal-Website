import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
const UXResearch = (props) => (
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
			During the Fall 2021 semester of my undergrad at Purdue University, I took a User Experience Design class.
			I worked with a team to redesign Craigslist's outdated user interface to help better serve the needs of our
			persona, a female college student looking to buy affordable and fashionable clothes. We performed a lot of research
			by analyzing other online eCommerce platforms (such as eBay and Facebook Marketplace) and figuring out what aspects of the outdated
			Craigslist website worked properly. We also performed heuristic evaluations for two differnt tasks on the old Craigslist website.
			With our research, we were able to redesign Craigslist with <b>Figma</b>.
			We interviewed other students to find out what they liked and disliked about both the old Craigslist
			design and our updated version and used this information to conclude on how can improve our
			Craigslist redesign further.
			<br /><br />
			As a part of this project, we documented our research and design process (Google Docs) and created a presentation (Google Slides).
			You can access them both below. Note that although the documentation is 80 pages long, you can use the
			Table of Contents to easily switch to the section you are interested in reading about.   
			<br /><br />
			You can find my individual contributions for this project at the appendix of the documentation.
		</Typography>
		<hr />
		<br />
		<div>
			<ButtonGroup variant="contained" aria-label="outlined primary button group">
				<Button href = "https://docs.google.com/document/d/1R_H9vg0WzbPiioxAxvGR4_2Fn31Q5z-bb4z1lXF_viE/edit?usp=sharing" target = "_blank" variant="contained" endIcon={<OpenInNewIcon />}>
					Project Documentation
				</Button>
				<Button href = "https://docs.google.com/presentation/d/1aAEbWTtJIrAY12Jd_AMTBYFPWm-fK1RQ-zyz5SukrfM/edit?usp=sharing" target = "_blank" variant="contained" endIcon={<OpenInNewIcon />}>
					Project Presentation
				</Button>
			</ButtonGroup>			
		</div>
		<br />
	</>
);
export default UXResearch;