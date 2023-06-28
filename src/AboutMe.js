import React from 'react';
import { Image, Container, Row, Col} from 'react-bootstrap';
import './css/AboutMe.css';

function AboutMe() {
  return (
    <Container className='about-me-container' fluid='fluid'>
      <Row className='row-about-me align-items-center' sm={1} md={1} lg={1} xl={1} xxl={2}>
        <Col className='description' xs={12} sm={12} md={12} lg={12} xl={12} xxl={4}>
          <div className='text-about-me'>
            <h1 className='text'>About Me</h1>
            <p className='text'>
                  Welcome to my personal project portfolio website! I'm Daniel Mironiuk, a recent graduate from the Rochester Institute of Technology with
                  a BS in Software Engineering. As a passionate software engineer, I thrive on creating innovative solutions through code.
                  During my time at RIT, I gained a strong foundation in computer science,
                  excelling in programming languages, software development methodologies, and problem-solving. I have hands-on experience
                  from internships, some were at Foundry Digital and Sandstone Technologies, both where I collaborated with a team to build web and cloud applications.
                  I enjoy taking on personal projects that challenge me to explore new technologies, constantly striving to stay updated
                  with industry advancements. Let's connect and discuss how we can bring innovative ideas to life!
            </p>
          </div>
        </Col>
        <Col className='about-me' xs={12} sm={12} md={12} lg={12} xl={12} xxl={8}>
          <Image className='portrait' src='img/banner.png' alt='Portrait of Myself' fluid />
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMe;
