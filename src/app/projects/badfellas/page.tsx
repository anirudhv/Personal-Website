"use client"
import React from 'react';
import Typography from '@mui/material/Typography';
import Navigation from '../../Components/Navigation/Navigation';
import styles from '../../globals.css';

const BadFellas = () => (
	<div className={styles.centerContent}>
		<Navigation />
		<Typography variant = "h4" gutterBottom component = "div">
			BadFellas
		</Typography>
		<Typography variant = "h5" gutterBottom component = "div">
			Creative Project 
		</Typography>
		<hr />
		<Typography variant = "h6" gutterBottom component = "div">
		About the Project
		</Typography>
		<Typography variant = "body1" gutterBottom component = "div" align = "left" style = {{margin: "10px"}}>
		<i>BadFellas</i> is an image manipulation made to the <i>GoodFellas</i> movie poster with <b>Photoshop</b>.
		In this project, I first had a friend take four pictures of me posing like the actors
		in the original movie poster. I then imported the original movie poster into Photoshop
		followed by the four pictures taken of me. I made sure that that my photos were at a higher layer
		than the original movie poster. 
		<br />
		After this, I cropped my face from my photos, removing the background and any parts
		of my body that were visible. I applied a black and white filter to my faces and moved them on top
		of the faces of the actors in the movie poster with the corresponding facial expressions and positons.
		<br />
		As a final touch, I changed the title of the movie poster to <i>BadFellas</i> and changed the filmmaker's
		name from Martin Scorsese to my name. After all, <i>BadFellas</i> is my own creation.
		<br /> 
		Below, you can see my <i>BadFellas</i> movie poster and compare it with the original <i>GoodFellas</i> poster.
		</Typography>
		<hr />
		<div>
			<Typography variant = "buttonText" gutterBottom component = "div">
				<div style = {{fontWeight: "bold"}}>
					BadFellas Poster
				</div>
			</Typography>
			<img src = "BadFellas_Full.png" alt = "BadFellas Poster" width = "35%" />
		</div>
		<div>
			<Typography variant = "buttonText" gutterBottom component = "div">
				<div style = {{fontWeight: "bold"}}>
					Original GoodFellas Poster
				</div>
			</Typography>
			<img src = "GoodFellas.jpg" alt = "Original GoodFellas Poster" width = "35%" />
		</div>
	</div>
);

export default BadFellas;