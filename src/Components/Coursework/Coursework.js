import React, {useState} from 'react';
import modules from './Coursework.module.css';
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
		<center>
		<div id = {modules.coursework}>
        		{data.map((course, i) => (
        				<p class = {modules.item} key = {i}><b>&nbsp;{course.Coursework}</b></p>
        			))}
		</div>
		</center>
	);
}

export default Coursework;