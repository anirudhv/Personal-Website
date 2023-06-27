"use-client"
import React from 'react';
import IndividualCard from './IndividualCard/IndividualCard';

interface Props {
   projects: Array<any>;
}

const Cards = (props: Props)=> {
	const proj = Array.from(props.projects);
	return (
			<div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", margin: "2%", justifyContent: "center"}}> 
				{proj.map((project) => (
					<div key = {project.id} style={{ display: "flex", flexDirection: "row", margin: "2%" }}> 
						<IndividualCard 
						key = {project.id}
						id = {project.id}
						image = {project.image}
						name = {project.name}
						category = {project.category}
						description = {project.description}
						url = {project.url}
						/>
						</div>
				
				))}
				</div>
			
	);
}

export default Cards;