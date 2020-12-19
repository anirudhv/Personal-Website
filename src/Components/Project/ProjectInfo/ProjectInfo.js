import React, {useState} from 'react';
import Papa from 'papaparse';
import {Card, CardTitle, CardText} from 'reactstrap';
import {Button} from '@material-ui/core';

const ProjectInfo = (props) => {
	const path  = parseInt(props.location.pathname.split("/")[2]);
	const[data, setData] = useState([]);
	Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vSmpg_kTPLF1350moqMHiPI3f-68sOCMlwWGFVGnfLZaXcFBTufAqSIOTdBu9YFgtngHoeZM-NbzvJY/pub?output=csv", {
		download:true,
		header:true,
		complete:(results) => {
			setData(results.data[path]);
			if(results.data[path] === undefined) {
				props.history.push('/projects');
			}
		}});
	const link = "https://www.youtube.com/embed/" + data.Video;
	const code = "https://github.com/anirudhv/" + data.Code;
	const download = "https://bit.ly/" + data.Download;

	return(
		<div>
		<h2>{data.Name}</h2>
		<h5>{data.Team}</h5>
		<p><b>Technologies: </b>{data.Technologies}</p>
		<div>
	        <Card body>
	          <CardTitle tag="h5">About</CardTitle>
	          <CardText>{data.About}</CardText>
	          {data.Link !== "-" ? 
	          <Button color = "primary" id = {data.Name} href = {data.Link}
				target = "_blank">	
					VIEW
			</Button> : null }
	          {data.Download !== "-" ? 
	          <Button color = "primary" id = {data.Download} href = {download}
				target = "_blank">	
					DOWNLOAD
			</Button> : null }
	          <Button color = "secondary" id = {data.Code} href = {code}
				target = "_blank">	
					SOURCE CODE
			</Button>
	        </Card>
		</div>
		{data.Video !== "No" ? <div><p><b>Demo</b></p><iframe title = "demo" width="560" height="315" src= {link} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div> : null}
		</div>

	);
} 
export default ProjectInfo;