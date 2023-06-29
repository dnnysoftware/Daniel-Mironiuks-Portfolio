import {Container, Card} from 'react-bootstrap';
import MatrixRainAnimation from './Animation';
import './css/Education.css';

function Education() {
    return (
        <>
            <MatrixRainAnimation className="matrix" />
            <div className='education-section d-flex align-items-center'>
                <Container className='education-container'>
                    <div className='edu-content'>
                        <h1 className='text'>Education</h1>
                        <Card bg='dark' text='light' border='success'>
                            <Card.Header className='text pos'>Rochester Institute of Technology</Card.Header>
                            <Card.Header className='text pos'>Bachelor's Degree in Software Engineering</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
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