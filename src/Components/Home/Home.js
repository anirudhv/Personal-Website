import React, {useState, useEffect, useRef} from 'react';
import Dropdowns from './Dropdowns/Dropdowns';
import Typography from '@mui/material/Typography';
import Cards from './Cards/Cards';
import { orderBy, shuffle, isEmpty } from 'lodash';
const Home = (props) => {
	const projectList = props.proj;
	const [projects, setProjects] = useState(projectList);
	const [sort, setSort] = useState('');
	const [category, setCategory] = useState([]);
	const reason = useRef('');
	const sortChange = (event) => {
		reason.current = 'sort';
		setSort(event.target.value);
	}
	const categoryChange = (event) => {
		reason.current = 'category';
		setCategory(event.target.value);
	}
	const categoryDelete = (event, val) => {
		reason.current = 'category';
		setCategory(category.filter(cat => cat !== val));
	}
	useEffect(()=> {
		const checkSort = () => {
			let listOfProjects = projectList;
			switch(sort) {
				case "Project Name (A-Z)":
					listOfProjects = orderBy(projectList, ['name'], ['asc']);
					break;
				case "Project Name (Z-A)":
					listOfProjects = orderBy(projectList, ['name'], ['desc']);
					break;
				case "Project Category (A-Z)":
					listOfProjects = orderBy(projectList, ['category', 'name'], ['asc', 'asc']);
					break;
				case "Project Category (Z-A)":
					listOfProjects = orderBy(projectList, ['category', 'name'], ['desc', 'desc']);
					break;
				case "Random":
					listOfProjects = orderBy(shuffle(projectList));
					break;
				default:
					break;
			}
			return listOfProjects;
		}
		const checkCategory = (projs) => {
			const newList = [];
			if(!isEmpty(category)) {
				projs.map((proj) => {
					category.map((cat) => {
						if(proj.category === cat) {
							newList.push(proj);
						}
						return cat;
					});
					return proj;
				});
				return newList;
			} else {
				return projs;
			}
		}
		const sortedListOfProjects = checkSort();
		const finalListOfProjects = checkCategory(sortedListOfProjects);
		setProjects(finalListOfProjects);
	}, [sort, category, projectList]);
	return (
		<>
			<Typography variant = "h6" gutterBottom component = "div">
				Please select a project below to learn more about it.
			</Typography>
			<Dropdowns 
			data = {projectList}
			changeCategory = {categoryChange}
			changeSort = {sortChange}
			sort = {sort}
			category = {category}
			deleteCategory = {categoryDelete}
			 />
			<Cards projects = {projects} />
		</>
	);
}

export default Home;