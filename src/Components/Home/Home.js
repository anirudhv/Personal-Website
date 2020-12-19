import React from 'react';
import {Card, 
	CardActionArea, 
	CardActions, 
	CardContent, 
	Button,
	Typography} from '@material-ui/core';
import modules from './Home.module.css';
import Photo from '../Photo/Photo';

const Home = () => {
	return (
	<center>
	<Card className = {modules.Card}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Anirudh Venkataramanan
          </Typography>
            <Photo link = "images/anirudh.jpg" />
          <Typography variant="body2" color="black" component="p">
           I am a junior at <a href = "https://purdue.edu"> Purdue University </a>
           majoring in <a href = "https://polytechnic.purdue.edu/departments/computer-graphics-technology">
           Computer Graphics Technology</a> with minors in <a href = "https://www.cs.purdue.edu/"> Computer Science </a>
           and <a href = "https://polytechnic.purdue.edu/degrees/computer-and-information-technology"> Information Technology</a>.
          </Typography>
        </CardContent>
      </CardActionArea>
 		<CardActions>
	        <Button size="small" color="primary">
	          <a href = "Anirudh_Resume.pdf" target = "_blank">View Resume</a>
	        </Button>
	        <Button size="small" color="primary">
	          <a href = "Anirudh_CoverLetter.pdf" target = "_blank">View Cover Letter</a>
	        </Button>
      </CardActions>
    </Card>
    </center>
	);
}

export default Home;