import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Stage } from '@react-three/drei';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image";


import Navigation from './Navigation';
import MatrixRainAnimation from './Animation';
import './App.css';


function Model(props) {
  const { scene } = useGLTF('/model.glb');
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Adjust the rotation speed here
    }
  });

  return <primitive object={scene} ref={modelRef} {...props}/>;
}

function App() {

  return (
    <>
      <div>
        <Navigation/>
      </div>
      <div className="app">
        <MatrixRainAnimation className="matrix" />
        <Container>
          <Row className="row">
            <Col className='canvas title-info'>
              <div className='info-section'>
                <p className='text title'>Daniel Mironiuk's Portfolio</p>
                <p className='text desc'>Check Out My Code!</p>
                <div className='text-box'>
                  <a className='port-button port-button-white port-button-animate' href="https://github.com/dnnysoftware" rel="noreferrer" target="_blank">Github</a>
                  <a className='port-button port-button-white port-button-animate' href='https://www.linkedin.com/in/daniel-mironiuk/' rel="noreferrer" target="_blank">LinkedIn</a>
                  <a className='port-button port-button-white port-button-animate' href="mailto: softwarebydanielmironiuk@gmail.com">Email</a>
                </div>
              </div>
            </Col>
            <Col className='canvas model' >
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
      </div>
      <div className='about-me'>
        <p>About Me</p>
        <Image
          className='portrait'
          src='img/me.png'
        />
      </div>
    </>
  );
}

export default App;
