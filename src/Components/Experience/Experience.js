import React, {useState} from 'react';
import Papa from 'papaparse';
import Dropdown from '../Dropdown/Dropdown';

const Experience = () => {
	const[data, setData] = useState([]);
	Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vRE85iBBXAsP4pZu1vUMLAhZBjHdcnzIWWqa40oD0U06jAsadWq8BxI0cGd367ybWwLmAsekBA45P2h/pub?output=csv", {
		download:true,
		header:true,
		complete:(results) => {
			setData(results.data);
		}
	});
	return (
		<div>
		{data.map((item, i) => (
			<Dropdown key = {i}
				name = {item.Name}
				date = {item.Date}
				description = {item.Description} />
			))}
	</div>
	);
}

export default Experience;