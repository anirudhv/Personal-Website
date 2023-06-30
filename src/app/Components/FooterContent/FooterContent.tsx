"use client"
import React from 'react';
import Typography from '@mui/material/Typography';

const FooterContent = () => (
	<Typography color = "white" variant = "body2" gutterBottom component = "div" align = "center" style = {{margin: "10px"}}>
		Website created with Next.js <a style = {{color:'yellow'}} href = "https://github.com/anirudhv/Personal-Website" rel = "noreferrer" target = "_blank">View Code on GitHub</a>
	</Typography>
);

export default FooterContent;