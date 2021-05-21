import React, {useState} from 'react';
import Papa from 'papaparse';
import {Card, CardTitle, CardText} from 'reactstrap';
import {Button} from '@material-ui/core';
import modules from './ProjectInfo.module.css';

const ProjectInfo = (props) => {
	const path  = parseInt(props.location.pathname.split("/")[2]);
	const[name, setName] = useState('Loading...');
	const[about, setAbout] = useState('Loading...');
	const[technologies, setTechnologies] = useState('Loading...');
	const[team, setTeam] = useState('Loading...');
	const[video, setVideo] = useState('No');
	const[link, setLink] = useState('/');
	const[code, setCode] = useState('/');
	const[download, setDownload] = useState('/');

		Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vSmpg_kTPLF1350moqMHiPI3f-68sOCMlwWGFVGnfLZaXcFBTufAqSIOTdBu9YFgtngHoeZM-NbzvJY/pub?output=csv", {
			download:true,
			header:true,
			complete:(results) => {
				const data = results.data[path];
				console.log(data);
				if(data !== undefined) {
					setName(data.Name);
					setAbout(data.About);
					setTechnologies(data.Technologies);
					setTeam(data.Team);
					setVideo("https://www.youtube.com/embed/" + data.Video);
					setLink(data.Link);
					setCode("https://github.com/anirudhv/" + data.Code);
					setDownload("https://bit.ly/" + data.Download);
				} else {
					props.history.push('/projects');
				}
			}}); 

	return(
		<div id = {modules.project}>
		<h2>{name}</h2>
		<h5>{team}</h5>
		<p><b>Technologies: </b>{technologies}</p>
		<div>
	        <Card body>
	          <CardTitle tag="h5">About</CardTitle>
	          <CardText>{about}</CardText>
	          {link !== "-" ? 
	          <Button color = "primary" id = {name} href = {link}
				target = "_blank">	
					VIEW
			</Button> : null }
	          {download !== "-" ? 
	          <Button color = "primary" id = {download} href = {download}
				target = "_blank">	
					DOWNLOAD
			</Button> : null }
	          <Button color = "secondary" id = {code} href = {code}
				target = "_blank">	
					SOURCE CODE
			</Button>
	        </Card>
		</div>
		{video !== "No" ? <div><p><b>Demo</b></p><iframe title = "demo" width="80%" height="315px" src= {video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div> : null}
		</div>

	);
} 
export default ProjectInfo;