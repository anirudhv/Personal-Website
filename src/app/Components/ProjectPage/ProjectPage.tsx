import React from 'react';
import styles from '../../page.module.css';
import Typography from '@mui/material/Typography';
import Navigation from '../Navigation/Navigation';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from 'next/link';

interface Props {
   name: string;
   content: React.ReactNode;
}

const projectList =
{"Culinary Clicks": {
    name: "Culinary Clicks",
    id: "culinaryclicks",
    url: "/culinary-clicks",
    image: "culinaryclicks.jpg",
    category: "Technical",
    description: "Food Photo Gallery Full-Stack Website."
  },
  "Leers": {
    name: "Leers",
    id: "leers",
    url: "/leers",
    image: "leers.jpg",
    category: "Technical",
    description: "Word game where users enter as many words as possible given a set of starting and ending letters."
  },
  "TAZ Developers": {
    name: "TAZ Developers",
    id: "tazdevelopers",
    url: "/taz-developers",
    image: "tazdevelopers.jpg",
    category: "Technical",
    description: "Single Page Front-End website for my undergraduate senior year project team."
  },
  "HTML and JavaScript Data Visualizations": {
    name: "HTML and JavaScript Data Visualizations",
    id: "web-data-visualizatons",
    url: "/web-data-visualizatons",
    image: "webdatavisualizations.jpg",
    category: "Technical",
    description: "A collection of HTML, static JavaScript, and interactive JavaScript data visualizations."
  },
  "Purdue Apps": {
    name: "Purdue Apps",
    id: "purdueapps",
    url: "/purdue-apps",
    image: "purdueapps.jpg",
    category: "Technical",
    description: "Front-End website showcasing mobile apps that are useful for Purdue University students."
  },
  "Location Tracker": {
    name: "Location Tracker",
    id: "locationtracker",
    url: "/location-tracker",
    image: "locationtracker.jpg",
    category: "Technical",
    description: "Android App that tracks the user's location as they move and shows markings of all tracked locations on a map."
  },
  "MP3 Player": { 
  	name: "MP3 Player",
    id: "mp3player",
    url: "/mp3-player",
    image: "mp3player.jpg",
    category: "Technical",
    description: "MP3 Player Android App."
  },
  "Unit Converter": { 
  	name: "Unit Converter",
    id: "unitconverter",
    url: "/unit-converter",
    image: "unitconverter.jpg",
    category: "Technical",
    description: "Unit Converter Android App."
  },
  "Tableau Visualizations": {
    name: "Tableau Visualizations",
    id: "tableauvisualizations",
    url: "/tableau-visualizations",
    image: "tableauvisualizations.jpg",
    category: "Interpretive",
    description: "Sub-portfolio showing my proficiency in Tableau and knowledge of the data visualization process."
  },
  "Memory Chef": {
    name: "Memory Chef",
    id: "memorychef",
    url: "/memory-chef",
    image: "memorychef.jpg",
    category: "Technical",
    description: "Desktop Game that has players memorize a pizza order under a timer and then create that pizza from scratch."
  },
  "Raspberry Pi Web Server and NAS Server": {
    name: "Raspberry Pi Web Server and NAS Server",
    id: "raspberry-pi-web-server-nas-server",
    url: "/raspberry-pi-web-server-nas-server",
    image: "raspberrypiwebservernasserver.jpg",
    category: "Technical",
    description: "Raspberry Pi with fully functional Web Server, NAS Server, and Sensors. Python program that shows the capabilities of the servers and sensors."
  },
  "Realistic Tornado Simulation Visualization": {
    name: "Realistic Tornado Simulation Visualization",
    id: "tornadosimulationvisualization",
    url: "/tornado-simulation-visualization",
    image: "tornadosimulation.jpg",
    category: "Creative",
    description: "Realistic Tornado Simulation Animation."
  },
  "Zamioculcas Zamiifolia": {
    name: "Zamioculcas Zamiifolia",
    id: "zamioculcaszamiifolia",
    url: "/zamioculcas-zamiifolia",
    image: "zamioculcaszamiifolia.jpg",
    category: "Creative",
    description: "3D Model of the Zamioculcas Zamiifolia plant."
  },
  "UX Research": {
    name: "UX Research",
    id: "uxresearch",
    url: "/ux-research",
    image: "uxresearch.jpg",
    category: "Interpretive",
    description: "Craigslist Redesign User Experience Research Project"
  },
  "BadFellas": {
    name: "BadFellas",
    id: "badfellas",
    url: "/badfellas",
    image: "badfellas.jpg",
    category: "Creative",
    description: "Parody and image manipulation of the GoodFellas movie poster."
  },
  "Mental Health Resources at Purdue University": {
    name: "Mental Health Resources at Purdue University",
    id: "mentalhealthpurdue",
    url: "/mental-health-purdue",
    image: "mentalhealthpurdue.jpg",
    category: "Interpretive",
    description: "White Paper discussing mental health issues and resources at both Purdue University and the world at large."
  }};

const ProjectPage = (props: Props) => {
	const data = projectList[props.name];
	const breadcrumbs = [
		<Link key="1" color="inherit" href="/projects">
      		Projects
    	</Link>,
	    <Typography key="2" color="primary">
	      {data.name}
	    </Typography>
	];

	return(
		<div id={styles.container}>
			<Navigation />
			<Breadcrumbs
			separator={<NavigateNextIcon fontSize="small" />}
			aria-label="breadcrumb"
			>
			{breadcrumbs}
			</Breadcrumbs>
			<Typography variant = "h4" gutterBottom component = "div">
				{data.name} 
			</Typography>
			<Typography variant = "h5" gutterBottom component = "div">
				{data.category + "Project"}
			</Typography>
			<hr />
			<Typography variant = "h6" gutterBottom component = "div">
			About the Project
			</Typography>
			{props.content}
			<br />
		</div>
	);
}

export default ProjectPage;