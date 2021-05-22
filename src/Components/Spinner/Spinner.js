import React from 'react';
import {Circle, DualRing, Ellipsis, Grid, Hourglass, Ring, Ripple, Roller, Wave} from 'react-css-spinners';
import modules from './Spinner.module.css';

const Spinner = () => {
	const type = Math.floor(Math.random() * 9) + 1;
	const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
	const color = colors[Math.floor(Math.random() * colors.length)];
	const size = 325;
	let item = null;
	switch(type) {
		case 1:
			item = <Circle color = {color} size = {size} />;
			break;
		case 2:
			item = <DualRing color = {color} size = {size} />;
			break;
		case 3:
			item = <Ellipsis color = {color} size = {size} />;
			break;
		case 4:
			item = <Grid color = {color} size = {size} />;
			break;
		case 5:
			item = <Hourglass color = {color} size = {size} />;
			break;
		case 6:
			item = <Ring color = {color} size = {size} />
			break;
		case 7:
			item = <Ripple color = {color} size = {size} />;
			break;
		case 8:
			item = <Roller color = {color} size = {size} />;
			break;
		case 9:
			item = <Wave color = {color} size = {size} />;
			break;
		default:
			break;
	}
	return(
		<div id = {modules.spinner}>
			{item}
		</div>
	);
}

export default Spinner;