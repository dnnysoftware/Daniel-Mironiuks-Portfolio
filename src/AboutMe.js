import React from 'react';
import { Image, Container, Row } from 'react-bootstrap';

function AboutMe() {
  return (
    <Container className='description-container'>
        <div className="description">
            <h1 className="desc-title">About Me</h1>
            <p className="desc-text">
                Welcome to my personal project portfolio website! I'm Daniel Mironiuk, a recent graduate from the Rochester Institute of Technology with
                a BS in Software Engineering. As a passionate software engineer, I thrive on creating innovative solutions through code.
                During my time at RIT, I gained a strong foundation in computer science,
                excelling in programming languages, software development methodologies, and problem-solving. I have hands-on experience
                from internships, some were at Foundry Digital and Sandstone Technologies, both where I collaborated with a team to build web and cloud applications.
                I enjoy taking on personal projects that challenge me to explore new technologies, constantly striving to stay updated
                with industry advancements. I'm currently seeking employment opportunities to contribute my technical expertise, creativity, and
                problem-solving skills to an innovative team. Let's connect and discuss how we can bring innovative ideas to life!
            </p>
        </div>
        <div className="about-me">
            <Image className="portrait" src="img/banner.png" alt="Portrait of Myself" fluid />
        </div>
    </Container>
  );
}

export default AboutMe;
