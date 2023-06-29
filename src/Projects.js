import MatrixRainAnimation from './Animation';
import {Container} from 'react-bootstrap';
import './css/Projects.css';

function Projects() {
    return (
        <>
            <MatrixRainAnimation className="matrix" />
            <div className='gps-proj text-center'>
                <h1 className='text white projects-title'>Projects</h1>
                <div className='gps-proj d-flex align-items-center'>
                    <GPS_PROJECT/>
                </div>
            </div>
            <MatrixRainAnimation className="matrix" />
            <div className='gps-proj text-center'>
                <div className='gps-proj d-flex align-items-center'>
                    <GPS_PROJECT/>
                </div>
            </div>
        </>
    );
}

function GPS_PROJECT() {
    return (
        <Container className='projects-container'>
            <div className='project-content text-center'>
                <h3 className='text'>GPS State Capitol Project</h3>
            </div>
        </Container>
    )
}

export default Projects;