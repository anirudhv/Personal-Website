import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {useNavigate} from 'react-router-dom';
const IndividualCard = (props) => {
	let navigate = useNavigate();
	const doOnClick = (url) => {
		navigate(url);
	} 
	return (
		<div style = {{flexGrow: 1, justifyContent: 'center'}} onClick = {()=> doOnClick(props.url) }>
		<Card sx={{ width: 300 }}>
	      	<CardActionArea>
	        <CardMedia
	          component="img"
	          height="140"
	          image = {props.image}
	          alt = {props.id}
	        />
	        <CardContent styles={{backgroundColor:'black', textColor:'white'}}>
	          <Typography gutterBottom variant="h5" component="div">
	            {props.name}
	          </Typography>
	          <Typography gutterBottom variant="subtitle1">
	          	{props.category}
	          </Typography>
	          <Typography variant="body2" color="text.secondary">
	          	{props.description}
	          </Typography>
	        </CardContent>
	      </CardActionArea>
    	</Card>
    	</div>
	);
}

export default IndividualCard;