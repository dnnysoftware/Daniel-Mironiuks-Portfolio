import { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Stage } from '@react-three/drei';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.css';

function MatrixRainAnimation() {
  const canvasRef = useRef(null);
  const dropsRef = useRef([]);
  const columnsRef = useRef(0);
  const fontSize = 10;
  const letters = '10'.split('');

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const { width, height } = canvas;

    const columns = Math.floor(width / fontSize);
    columnsRef.current = columns;

    const drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }
    dropsRef.current = drops;

    const draw = () => {
      context.fillStyle = 'rgba(0, 0, 0, .1)';
      context.fillRect(0, 0, width, height);
      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        context.fillStyle = '#0f0';
        context.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
        if (drops[i] * fontSize > height && Math.random() > 0.95) {
          drops[i] = 0;
        }
      }
    };

    const animate = () => {
      draw();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animate);
    };
  }, [letters]);

  return (
    <canvas ref={canvasRef} className="matrix"/>
  );
}

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
      <div className="app">
        <MatrixRainAnimation className="matrix" />
        <Container>
          <Row className="row">
            <Col className='canvas title-info'>
              <div className='info-section'>
                <p className='title'>Daniel Mironiuk's Portfolio</p>
                <p className='desc'>Check Out My Code!</p>
                <div className='text-box'>
                  <a className='btn btn-white btn-animate' href="https://github.com/dnnysoftware" rel="noreferrer" target="_blank">Github</a>
                  <a className='btn btn-white btn-animate' href='https://www.linkedin.com/in/daniel-mironiuk/' rel="noreferrer" target="_blank">LinkedIn</a>
                  <a className='btn btn-white btn-animate' href="mailto: softwarebydanielmironiuk@gmail.com">Email</a>
                </div>
              </div>
            </Col>
            <Col className='canvas model' >
              <Canvas shadows camera={{ fov: 100, near: 0.1, far: 1000, position: [0, 2, 4] }}>
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
      <div className='yeet'>
        <p>Thing</p>
      </div>
    </>
  );
}

export default App;
