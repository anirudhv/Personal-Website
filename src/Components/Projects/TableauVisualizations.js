import React from 'react';
import Typography from '@mui/material/Typography';
const TableauVisualizations = (props) => (
	<>
		<Typography variant = "h4" gutterBottom component = "div">
			{props.name} 
		</Typography>
		<Typography variant = "h5" gutterBottom component = "div">
			{props.category + " Project"} 
		</Typography>
		<hr />
		<Typography variant = "h6" gutterBottom component = "div">
		About the Project
		</Typography>
		<Typography variant = "body1" gutterBottom component = "div" align = "left" style = {{margin: "10px"}}>
		Throughout my academic and professional career, I have worked on many data visualization projects with <b>Tableau</b>.
		This project showcases what I believe are two of my best Tableau data visualizations along with a description of their
		functionality.
		</Typography>
		<hr />
		<br />
		<div>
				<img src = "ShippingDashboard.jpg" alt = "Shipping Dashboard" width = "75%" />
			<Typography variant = "body2" gutterBottom component = "div" align = "left" style = {{margin: "10px"}}>
				The visualization above – Shipping Dashboard – is a dashboard. A dashboard showcases numerous visualizations along with other media, 
				such as text and images, together. Shipping Dashboard presents three visualizations in the same frame. The visualizations Running Total Shipping Costs
				 and Shipping Cost both have the exact same legends individually, so they share the legend in the dashboard. Thus, as the user interacts with the legend, both visualizations will be modified together. 
				 This visualization does a great job of showing how I can combine multiple visualizations with similarities together using dashboards, and manipulate those visualizations simultaneously with legends. 
				 I am proud of this visualization as it goes above and beyond in terms of functionality. Being able to view and update multiple visualizations all in one place with dashboards can save a lot of time as opposed to using 
				 standalone visualizations as users will not need to go back and forth between different visualization views. This visualization also does a great job 
				 of showing all the different visualizations in the dashboard clearly without any one of them being crammed. 
			</Typography>
			<img src = "WebpageManipulation.jpg" alt = "Webpage Manipulation" width = "75%" />
			<Typography variant = "body2" gutterBottom component = "div" align = "left" style = {{margin: "10px"}}>
				The visualization above with the Wikipedia page is also a dashboard. Selecting a state from the top-left bar graph will automatically update the map on the top-right visualization. 
				When a city in the top right visualization of the dashboard is clicked, the Wikipedia page will update to the page of the newly selected city. While the visualization below shows different Wikipedia pages, 
				Tableau allows string manipulation to be done for any URL. While working at a company, I can show different subpages of the company’s website conditionally as the user interacts with other visualizations on 
				the dashboard. Being able to auto-update certain visualizations of a dashboard by interacting with other visualizations is mind-blowing and adds to the user experience of viewing the visualization.  
			</Typography>
		</div>
		<br />
	</>
);
export default TableauVisualizations;