import {Card, Container} from 'react-bootstrap';
import './css/Education.css';

function Education() {
    return (
        <div className='education-section d-flex align-items-center'>
            <Container className='education-container'>
                <Card className='education-card'>
                    <Card.Body className='white education-card-body'>
                        <Card.Title>Education</Card.Title>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}

export default Education;