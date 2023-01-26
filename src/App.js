import './App.css';
import Contact from './Components/ContactComponent/Contact';
import Home from './Components/HomePageComponent/Home';
import Project from './Components/ProjectComponent/Project';
import Skills from './Components/SkillsComponent/Skills';
import AboutUs from './Components/AboutUs/AboutUs';


function App() {
  return (
    <div className="App">
      <Home />
      <Project />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
