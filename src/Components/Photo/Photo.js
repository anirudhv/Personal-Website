import React from 'react';
import {Avatar} from '@material-ui/core';

const Photo = (props) => (
	<Avatar alt = "Anirudh Venkataramanan" src = {props.link} />
);

export default Photo;