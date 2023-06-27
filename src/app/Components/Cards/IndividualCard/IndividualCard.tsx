"use client"
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Link from 'next/link';

interface Props {
   key: string;
   id: string;
   image: string;
   name: string;
   category: string;
   description: string;
   url: string;
}

const IndividualCard = (props: Props) => {
	// const doOnClick = (url) => {
	// 	navigate(url);
	// } 
	return (
		<Link href={"/projects" + props.url}>
			<div style = {{flexGrow: 1, justifyContent: 'center'}}>
				<Card sx={{ width: 300 }}>
			      	<CardActionArea>
			        <CardMedia
			          component="img"
			          height="140"
			          image = {props.image}
			          alt = {props.id}
			        />
			        <CardContent>
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
    	</Link>
	);
}

export default IndividualCard;