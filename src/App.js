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
import MP3Player from './Components/Projects/MP3Player';
import PurdueApps from './Components/Projects/PurdueApps';
import TAZDevelopers from './Components/Projects/TAZDevelopers';
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
      name: "TAZ Developers",
      id: "tazdevelopers",
      url: "/taz-developers",
      image: "tazdevelopers.jpg",
      category: "Technical",
      component: TAZDevelopers,
      description: "Single Page Front-End website for my undergraduate senior year project team."
    },
    {
      name: "Purdue Apps",
      id: "purdueapps",
      url: "/purdue-apps",
      image: "purdueapps.jpg",
      category: "Technical",
      component: PurdueApps,
      description: "Front-End website showcasing mobile apps that are useful for Purdue University students."
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
    { name: "MP3 Player",
      id: "mp3player",
      url: "/mp3-player",
      image: "mp3player.jpg",
      category: "Technical",
      component: MP3Player,
      description: "MP3 Player Android App."
    },
    {
      name: "Tableau Visualizations",
      id: "tableauvisualizations",
      url: "/tableau-visualizations",
      image: "tableauvisualizations.jpg",
      category: "Interpretive",
      component: TableauVisualizations,
      description: "Sub-portfolio showing my proficiency in Tableau and knowledge of the data visualization process."
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
      description: "White Paper discussing mental health issues and resources at both Purdue University and the world at large."
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
