import './App.css';
import Navigation from './Layout/Navigation/Navigation';
import {Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Experience from './Components/Experience/Experience';
import Project from './Components/Project/Project';
import ProjectInfo from './Components/Project/ProjectInfo/ProjectInfo';
import Skills from './Components/Skills/Skills';
import Footer from './Layout/Footer/Footer';
import Coursework from './Components/Coursework/Coursework';
function App() {
  return (
    <div className="App">
      <Navigation />
      <Route exact path="/" component = {Home} />
      <Route exact path = "/experience" component = {Experience} />
      <Route exact path = "/projects" component = {Project} />
      <Route exact path = "/projects/:projectId" component = {ProjectInfo} />
      <Route exact path = "/skills" component = {Skills} />
      <Route exact path = "/coursework" component = {Coursework} />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;
