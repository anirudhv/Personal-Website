import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
const ZamioculcasZamiifolia = (props) => (
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
			I have created a couple 3D Models with <b>Autodesk Maya</b>, but this one of the Zamioculcas Zamiifolia plant
			is by far one of the best models I have created. If you look closely at the model, you will notice that I have included
			textures for the wooden table that the pot is on top of, the soil, and the leaves of the plant. 
			I used a couple of images of the Zamioculcas Zamiifolia plant as a reference and tried to replicate it as much as possible
			while using my own creativity for the pot and table. The shadows of the plant are also reflected on the soil
				due to the lighting.
			<br /><br />
			You can access the 3D model below. Using your mouse (or fingers), feel free to rotate the model to view it from different angles.
			You can also zoom in and zoom out to see different parts of the model up close.
			<br /><br />
			For your convenience, I have also included the photos I used as reference when creating this 3D model.
		</Typography>
		<hr />
		<br />
		<div>
			<ButtonGroup variant="contained" aria-label="outlined primary button group">
				<Button href = "https://skfb.ly/o8zWR" target = "_blank" variant="contained" endIcon={<OpenInNewIcon />}>
					View 3D Model
				</Button>
			</ButtonGroup>
			<br /><br />
			<img src = "references.jpg" alt = "3D Model References" width = "75%" />
			<Typography variant = "captionText" gutterBottom component = "div" align = "center" style = {{margin: "10px"}}>
				References for 3D Model
			</Typography>
			<br />
		</div>
		<br />
	</>
);
export default ZamioculcasZamiifolia;