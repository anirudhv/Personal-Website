import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import CulinaryClicks from './Components/Projects/CulinaryClicks';
import LocationTracker from './Components/Projects/LocationTracker';
import ZamioculcasZamiifolia from './Components/Projects/ZamioculcasZamiifolia';
import MemoryChef from './Components/Projects/MemoryChef';
import UXResearch from './Components/Projects/UXResearch';
import BadFellas from './Components/Projects/BadFellas';
import MentalHealth from './Components/Projects/MentalHealth';
import TableauVisualizations from './Components/Projects/TableauVisualizations';
import TornadoSimulation from './Components/Projects/TornadoSimulation';
import {Routes, Route} from 'react-router-dom';
import Footer from 'rjs-sticky-footer/Footer';
import FooterBody from './Components/Footer/FooterBody';
const App = () => {
  const projectList = [{
      name: "Culinary Clicks",
      id: "culinaryclicks",
      url: "/culinary-clicks",
      image: "culinaryclicks.jpg",
      category: "Technical",
      component: CulinaryClicks,
      description: "Food Photo Gallery Full-Stack Website."
    },
    {
      name: "Location Tracker",
      id: "locationtracker",
      url: "/location-tracker",
      image: "locationtracker.jpg",
      category: "Technical",
      component: LocationTracker,
      description: "Android App that tracks the user's location as they move and shows markings of all tracked locations on a map."
    },
    {
      name: "Tableau Visualizations",
      id: "tableauvisualizations",
      url: "/tableau-visualizations",
      image: "tableauvisualizations.jpg",
      category: "Interpretive",
      component: TableauVisualizations,
      description: "Showcase of two data visualizations made with Tableau."
    },
    {
      name: "Memory Chef",
      id: "memorychef",
      url: "memory-chef",
      image: "memorychef.jpg",
      category: "Technical",
      component: MemoryChef,
      description: "Desktop Game that has players memorize a pizza order under a timer and then create that pizza from scratch."
    },
    {
      name: "Realistic Tornado Simulation Visualization",
      id: "tornadosimulationvisualization",
      url: "/tornado-simulation-visualization",
      image: "tornadosimulation.jpg",
      category: "Creative",
      component: TornadoSimulation,
      description: "Realistic Tornado Simulation Animation."
    },
    {
      name: "Zamioculcas Zamiifolia",
      id: "zamioculcaszamiifolia",
      url: "/zamioculcas-zamiifolia",
      image: "zamioculcaszamiifolia.jpg",
      category: "Creative",
      component: ZamioculcasZamiifolia,
      description: "3D Model of the Zamioculcas Zamiifolia plant."
    },
    {
      name: "UX Research",
      id: "uxresearch",
      url: "/ux-research",
      image: "uxresearch.jpg",
      category: "Interpretive",
      component: UXResearch,
      description: "Craigslist Redesign User Experience Research Project"
    },
    {
      name: "BadFellas",
      id: "badfellas",
      url: "/badfellas",
      image: "badfellas.jpg",
      category: "Creative",
      component: BadFellas,
      description: "Parody and image manipulation of the GoodFellas movie poster."
    },
    {
      name: "Mental Health Resources at Purdue University",
      id: "mentalhealthpurdue",
      url: "/mental-health-purdue",
      image: "mentalhealthpurdue.jpg",
      category: "Interpretive",
      component: MentalHealth,
      description: "White Paper analyzing why college students need mental health help more than others during the pandemic, the problems that exist within Purdue University's mental health resources, what other mental health resources offer that Purdue does not, and how Purdue University can improve their mental health resources."
    }];

  return (
    <div className="App">
      <Header />
      <br />
      <Routes>
        <Route exact path = "/" element = {<Home proj = {projectList} />} />
        {projectList.map(project => {
          const RenderThis = project.component;
          return (
          <Route exact path = {project.url} key = {project.id} element = {<RenderThis name = {project.name} category = {project.category} />} />
          )})}
      </Routes>
      <Footer
  background={'black'}
  opacity={1}
  footerBody={<FooterBody/>}
  isSticky={true}
/>
    </div>
  );
}


export default App;
