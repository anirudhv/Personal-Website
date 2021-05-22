import React, {useState} from 'react';
import modules from './Coursework.module.css';
import Papa from 'papaparse';
import Spinner from '../Spinner/Spinner';

const Coursework = (props) => {
	const[data, setData] = useState([]);
	const[loading, setLoading] = useState(true);
	Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vTrJL7NyYwsV4BRvnKIwb167u2q3b_utlJatiuxlL7PU3W8O64X-2i3r9CY9eMqKTRgj47ct1KlpUyT/pub?output=csv", {
			download:true,
			header:true,
			complete:(results) => {
				setLoading(false);
				setData(results.data);
			}});
	if(loading) {
		return <Spinner />;
	}
	return(
		<center>
		<div id = {modules.coursework}>
        		{data.map((course, i) => (
        				<p className = {modules.item} key = {i}><b>&nbsp;{course.Coursework}</b></p>
        			))}
		</div>
		</center>
	);
}

export default Coursework;