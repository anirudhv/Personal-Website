import React, {useState} from 'react';
import Papa from 'papaparse';


const Coursework = (props) => {
	const[data, setData] = useState([]);
	Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vTrJL7NyYwsV4BRvnKIwb167u2q3b_utlJatiuxlL7PU3W8O64X-2i3r9CY9eMqKTRgj47ct1KlpUyT/pub?output=csv", {
			download:true,
			header:true,
			complete:(results) => {
				setData(results.data);
			}});
	return(
		<div>
		<center>

        		{data.map((course, i) => (
        			/*<ListItem button key={i}>
        				<ListItemText primary={course.Coursework} />
        			</ListItem>*/
        			<p key = {i}><b>{course.Coursework}</b></p>
        			))}
        		</center>
		</div>
	);
}

export default Coursework;