import Navigation from './Navigation';
import MatrixRainAnimation from './Animation';
import Intro from './Intro';
import AboutMe from "./AboutMe";
import Expirence from './Expirence';
import Education from './Education';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
      <div>
        <MatrixRainAnimation className="matrix" />
        <Navigation/>
      </div>
      <Intro/>
      <AboutMe/>
      <div>
        <Education />
        <Expirence/>
      </div>
    </>
  );
}

export default App;
