import React, {Component} from 'react';
import {Button} from '@material-ui/core';
import Papa from 'papaparse';
import './Project.css';
import Spinner from '../Spinner/Spinner';

class Project extends Component {
	state = {
		projects: [], 
		loading: true
	}
	componentDidMount() {
		Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vSmpg_kTPLF1350moqMHiPI3f-68sOCMlwWGFVGnfLZaXcFBTufAqSIOTdBu9YFgtngHoeZM-NbzvJY/pub?output=csv", {
		download:true,
		header:true,
		complete:(results) => {
			this.setState({projects: results.data});
			this.setState({loading: false});
		}});
	}
	clicked = (num) => {
		this.props.history.push('/projects/' + num);
	}
	render() {
		const data = this.state.projects;
		if(this.state.loading) {
			return <Spinner />
		}
		return (
			<div id = "project">
			<h1>Please select a project to learn more about it and access it.</h1>
			<h3>Technical Projects</h3>
			{data.map((project, i) => (
				<Button color = "primary" key = {i} id = {i} onClick = {() => this.clicked(i)}>
				• {project.Name}
				</Button>
				))}
			<h3>Other Projects</h3>
			<Button color = "secondary" id = "datavis" href = "https://portfolium.com/AnirudhV/portfolio"
				target = "_blank">	
					• Data Visualization Portfolio
			</Button>	
			<Button color = "secondary" id = "3d" href = "https://sketchfab.com/anirudhv"
				target = "_blank">	
					• 3D Models (Autodesk Maya)
			</Button>	
			<Button color = "secondary" id = "graphics" href = "https://www.cincopa.com/media-platform/iframe.aspx?fid=AQBAVduskGmu#"
				target = "_blank">	
					• Graphic Designs
			</Button>
			<Button color = "secondary" id = "datavis2" href = "https://web.ics.purdue.edu/~anirudhv/"
				target = "_blank">	
					• Data Visualizations
			<br />
			<br />
			</div>
			</div>
		);
	}
}

export default Project;