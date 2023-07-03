import { useRef } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import { Canvas, useFrame} from '@react-three/fiber';
import { useGLTF, Stage } from '@react-three/drei';
import './css/Intro.css';


function Model() {
    const { scene } = useGLTF('/model.glb');
    const modelRef = useRef();
  
    useFrame(() => {
      if (modelRef.current) {
        modelRef.current.rotation.y += 0.01; // Adjust the rotation speed here
      }
    });
  
    return <primitive object={scene} ref={modelRef}/ >;
  }


function Intro() {

    return (
        <Container className='intro-container justify-content-center' fluid='xxl' id='home'>
            <Row className='intro-row' xs={1} sm={1} md={1} lg={2} xl={2} xxl={2}>
                <Col className='intro-col d-flex align-items-center' xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                    <div className='title-section justify-content-center'>
                        <p className='title text white'>DANIEL MIRONIUK'S PORTFOLIO</p>
                        <p className='desc text white'>Building Dreams Into Reality!</p>
                        <div>
                            <Container>
                                <Row xs={1} sm={1} md={3} lg={3} xl={3} xxl={3}>
                                    <Col><a className='port-button port-button-white port-button-animate' href="https://github.com/dnnysoftware" rel="noreferrer" target="_blank">Github</a></Col>
                                    <Col><a className='port-button port-button-white port-button-animate' href='https://www.linkedin.com/in/daniel-mironiuk/' rel="noreferrer" target="_blank">LinkedIn</a></Col>
                                    <Col><a className='port-button port-button-white port-button-animate' href="mailto: softwarebydanielmironiuk@gmail.com">Email</a></Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </Col>
                <Col className='intro-col'  xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                    <Canvas shadows camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 2, 4] }}>
                        <Stage environment="sunset">
                            <group scale={0.01}>
                                <Model />
                            </group>
                        </Stage>
                    </Canvas>
                </Col>
            </Row>
        </Container>
    );
}

export default Intro;
