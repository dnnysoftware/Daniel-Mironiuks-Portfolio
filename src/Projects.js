import MatrixRainAnimation from './Animation';
import './css/Projects.css';

function Projects() {
  return (
    <>
        <MatrixRainAnimation/>
        <div className='text-center'>
            <h1 className='text white projects-title'>Projects</h1>
            <div className='d-flex justify-content-center text-center'>
                <GPS_PROJECT />
            </div>
        </div>
        <MatrixRainAnimation/>
        <div className='sub d-flex justify-content-center text-center'>
            <GPS_PROJECT />
        </div>
        <MatrixRainAnimation/>
        <div className='sub d-flex justify-content-center text-center'>
            <GPS_PROJECT />
        </div>
        <MatrixRainAnimation/>
        <div className='sub d-flex justify-content-center text-center'>
            <GPS_PROJECT />
        </div>
    </>
  );
}

function GPS_PROJECT() {
  return (
    <>
        <div className='projects-container'>
            <a className='github-btn port-button port-button-white port-button-animate' href="https://github.com/dnnysoftware/GPS-Web-App" rel="noreferrer" target="_blank">GPS State Capitol Search</a>
            <video className='video-player' width="100%" height="100%" controls poster='./img/gps.png'>
                <source src='https://d1a8mx70ybu1ae.cloudfront.net/GPS_State_Capitol_Project.mov' type="video/mp4"/>
            </video>
        </div>
    </> 
  )
}

export default Projects;
