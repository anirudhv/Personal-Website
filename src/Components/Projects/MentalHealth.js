import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
const MentalHealth = (props) => (
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
		I care a lot about the mental health of my friends, family and myself. I recently wrote a research
		white paper that discusses the issues with Purdue University's mental health resources and potential solutions to improve them.
		</Typography>
		<hr />
		<br />
		<div>
			<ButtonGroup variant="contained" aria-label="outlined primary button group">
				<Button href = "AnirudhVenkataramanan_WhitePaper.pdf" target = "_blank"variant="contained" endIcon={<PictureAsPdfIcon />}>
					View White Paper
				</Button>
			</ButtonGroup>
		</div>
		<br />
	</>
);
export default MentalHealth;