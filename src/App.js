import Navigation from './Navigation';
import MatrixRainAnimation from './Animation';
import Intro from './Intro';
import AboutMe from "./AboutMe";
import Expirence from './Expirence';
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
      <Expirence/> 
      <Projects/>
    </>
  );
}

export default App;
