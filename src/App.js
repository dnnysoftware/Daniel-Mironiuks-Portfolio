import Navigation from './Navigation';
import MatrixRainAnimation from './Animation';
import Intro from './Intro';
import AboutMe from "./AboutMe";
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <>
      <MatrixRainAnimation className="matrix" />
      <Navigation/>
      <Intro/>
      <AboutMe/>
      <Education />
      <Experience/> 
      <Projects/>
    </>
  );
}

export default App;
