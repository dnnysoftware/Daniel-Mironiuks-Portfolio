import {Container, Card} from 'react-bootstrap';
import MatrixRainAnimation from './Animation';
import './css/Education.css';

function Education() {
    return (
        <>
            <MatrixRainAnimation className="matrix" />
            <div className='education-section d-flex align-items-center' id='education'>
                <Container className='education-container'>
                    <div className='edu-content text-center'>
                        <h1 className='text'>Education</h1>
                        <Card bg='dark' text='light' border='success'>
                            <Card.Header className='text pos'>Rochester Institute of Technology</Card.Header>
                            <Card.Header className='text pos'>Bachelor's Degree in Software Engineering</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                                    anim id est laborum.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Education;