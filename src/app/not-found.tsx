"use client"
import React from 'react';
import Navigation from './Components/Navigation/Navigation';
import Typography from '@mui/material/Typography';
import styles from './page.module.css';

const NotFound = () => {
	return(
		<div>
			<Navigation />
			<div id={styles.notfound}>
			<img src="/notfound.png" />
			<Typography variant="h2" gutterBottom>
				404 | PAGE NOT FOUND
			</Typography>
			</div>
		</div>
	);
}

export default NotFound;