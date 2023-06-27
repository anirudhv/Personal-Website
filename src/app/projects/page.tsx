"use client"
import React, { useState, useEffect, useRef, useMemo } from 'react';
import styles from './page.module.css';
import Navigation from '../Components/Navigation/Navigation';
import Dropdown from '../Components/Dropdown/Dropdown';
import Cards from '../Components/Cards/Cards';
import { orderBy, shuffle, isEmpty } from 'lodash';

const Projects = () => {
  const projectList =
    [{
        name: "Culinary Clicks",
        id: "culinaryclicks",
        url: "/culinary-clicks",
        image: "culinaryclicks.jpg",
        category: "Technical",
        description: "Food Photo Gallery Full-Stack Website."
      },
      {
        name: "Leers",
        id: "leers",
        url: "/leers",
        image: "leers.jpg",
        category: "Technical",
        description: "Word game where users enter as many words as possible given a set of starting and ending letters."
      },
      {
        name: "TAZ Developers",
        id: "tazdevelopers",
        url: "/taz-developers",
        image: "tazdevelopers.jpg",
        category: "Technical",
        description: "Single Page Front-End website for my undergraduate senior year project team."
      },
      {
        name: "HTML and JavaScript Data Visualizations",
        id: "web-data-visualizatons",
        url: "/web-data-visualizatons",
        image: "webdatavisualizations.jpg",
        category: "Technical",
        description: "A collection of HTML, static JavaScript, and interactive JavaScript data visualizations."
      },
      {
        name: "Purdue Apps",
        id: "purdueapps",
        url: "/purdue-apps",
        image: "purdueapps.jpg",
        category: "Technical",
        description: "Front-End website showcasing mobile apps that are useful for Purdue University students."
      },
      {
        name: "Location Tracker",
        id: "locationtracker",
        url: "/location-tracker",
        image: "locationtracker.jpg",
        category: "Technical",
        description: "Android App that tracks the user's location as they move and shows markings of all tracked locations on a map."
      },
      { name: "MP3 Player",
        id: "mp3player",
        url: "/mp3-player",
        image: "mp3player.jpg",
        category: "Technical",
        description: "MP3 Player Android App."
      },
      { name: "Unit Converter",
        id: "unitconverter",
        url: "/unit-converter",
        image: "unitconverter.jpg",
        category: "Technical",
        description: "Unit Converter Android App."
      },
      {
        name: "Tableau Visualizations",
        id: "tableauvisualizations",
        url: "/tableau-visualizations",
        image: "tableauvisualizations.jpg",
        category: "Interpretive",
        description: "Sub-portfolio showing my proficiency in Tableau and knowledge of the data visualization process."
      },
      {
        name: "Memory Chef",
        id: "memorychef",
        url: "/memory-chef",
        image: "memorychef.jpg",
        category: "Technical",
        description: "Desktop Game that has players memorize a pizza order under a timer and then create that pizza from scratch."
      },
      {
        name: "Raspberry Pi Web Server and NAS Server",
        id: "raspberry-pi-web-server-nas-server",
        url: "/raspberry-pi-web-server-nas-server",
        image: "raspberrypiwebservernasserver.jpg",
        category: "Technical",
        description: "Raspberry Pi with fully functional Web Server, NAS Server, and Sensors. Python program that shows the capabilities of the servers and sensors."
      },
      {
        name: "Realistic Tornado Simulation Visualization",
        id: "tornadosimulationvisualization",
        url: "/tornado-simulation-visualization",
        image: "tornadosimulation.jpg",
        category: "Creative",
        description: "Realistic Tornado Simulation Animation."
      },
      {
        name: "Zamioculcas Zamiifolia",
        id: "zamioculcaszamiifolia",
        url: "/zamioculcas-zamiifolia",
        image: "zamioculcaszamiifolia.jpg",
        category: "Creative",
        description: "3D Model of the Zamioculcas Zamiifolia plant."
      },
      {
        name: "UX Research",
        id: "uxresearch",
        url: "/ux-research",
        image: "uxresearch.jpg",
        category: "Interpretive",
        description: "Craigslist Redesign User Experience Research Project"
      },
      {
        name: "BadFellas",
        id: "badfellas",
        url: "/badfellas",
        image: "badfellas.jpg",
        category: "Creative",
        description: "Parody and image manipulation of the GoodFellas movie poster."
      },
      {
        name: "Mental Health Resources at Purdue University",
        id: "mentalhealthpurdue",
        url: "/mental-health-purdue",
        image: "mentalhealthpurdue.jpg",
        category: "Interpretive",
        description: "White Paper discussing mental health issues and resources at both Purdue University and the world at large."
      }];

  const [projects, setProjects] = useState(projectList);
  const [sort, setSort] = useState('');
  const [category, setCategory] = useState([]);
  const reason = useRef('');

  const sortChange = (event: any) => {
    reason.current = 'sort';
    console.log(event.target.value)
    setSort((event.target).value);
  }
  const categoryChange = (event: any) => {
    reason.current = 'category';
    setCategory(event.target.value);
  }
  const categoryDelete = (event: any, val: string) => {
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

    const checkCategory = (projs: any[]) => {
      const newList: any[] = [];
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
  }, [sort, category]);

  return (
    <div>
      <Navigation />

        <h3 className="center-content">
          Please select a project below to learn more about it.
        </h3>
        <Dropdown 
        data = {projectList}
        changeCategory = {categoryChange}
        changeSort = {sortChange}
        sort = {sort}
        category = {category}
        deleteCategory = {categoryDelete}
         />
 
      <Cards projects = {projects} />
    </div>
  );
}


export default Projects;