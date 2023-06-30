import MatrixRainAnimation from './Animation';
import './css/Projects.css';

function Projects() {
  return (
    <>
      <MatrixRainAnimation className="matrix" />
      <div className='text-center'>
        <h1 className='text white projects-title'>Projects</h1>
        <div className='d-flex justify-content-center'>
          <GPS_PROJECT />
        </div>
      </div>
    </>
  );
}

function GPS_PROJECT() {
  return (
    <div className='projects-container'>
      <h3 className='text'>GPS State Capitol Project</h3>
      <video width="100%" height="100%" controls>
        <source src='https://d1a8mx70ybu1ae.cloudfront.net/GPS_State_Capitol_Project.mov' type="video/mp4"/>
      </video>
    </div>
  )
}

export default Projects;
