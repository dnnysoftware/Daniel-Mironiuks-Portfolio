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
                                During my time at the Rochester Institute of Technology, I had an incredible educational journey that shaped me into the person I am today. I graduated Cum Laude, a testament to my dedication and hard work.

One of the highlights of my college experience was being a part of The Society of Software Engineers. As a mentor, I had the privilege of guiding and supporting fellow students, while also contributing to the organization of networking events and development projects. It was a rewarding experience that allowed me to hone my leadership and teamwork skills.

Another significant role I held was as the marketing manager and lead content creator for TEDxRIT. I took charge of developing and designing the program's website, creating captivating graphics, and managing social media platforms. It was an exhilarating opportunity to blend my passion for marketing and public speaking.

In addition, I enthusiastically joined the BioPrint club, where I utilized my skills to help design and 3D print prosthetics. It was fulfilling to contribute to a project that aimed to improve the lives of others.

Overall, my education at RIT was a transformative experience filled with academic achievements, invaluable club involvement, and a deep sense of personal growth.
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