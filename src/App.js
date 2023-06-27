import Navigation from './Navigation';
import MatrixRainAnimation from './Animation';
import Intro from './Intro';
import AboutMe from "./AboutMe";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
      <div>
        <Navigation/>
      </div>
      <div className="app">
        <MatrixRainAnimation className="matrix" />
        <Intro/>
      </div>
      <AboutMe/>
    </>
  );
}

export default App;
