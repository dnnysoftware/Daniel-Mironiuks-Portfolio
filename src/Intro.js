import { useRef } from 'react';


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Stage } from '@react-three/drei';


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


function Intro() {

    return (
        <>
            <Row className="row">
                <Col className='canvas title-info' sm={4}>
                    <div className='info-section'>
                        <p className='title-text title'>DANIEL MIRONIUK'S PORTFOLIO</p>
                        <p className='title-text desc'>Check Out My Code!</p>
                        <div className='text-box'>
                            <a className='port-button port-button-white port-button-animate' href="https://github.com/dnnysoftware" rel="noreferrer" target="_blank">Github</a>
                            <a className='port-button port-button-white port-button-animate' href='https://www.linkedin.com/in/daniel-mironiuk/' rel="noreferrer" target="_blank">LinkedIn</a>
                            <a className='port-button port-button-white port-button-animate' href="mailto: softwarebydanielmironiuk@gmail.com">Email</a>
                        </div>
                    </div>
                </Col>
                <Col sm={1}></Col>
                <Col className='canvas model' sm={7}>
                <Canvas shadows camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 2, 4] }}>
                    <Stage environment="sunset">
                    <group scale={0.01}>
                        <Model />
                    </group>
                    </Stage>
                </Canvas>
                </Col>
            </Row>
        </>
    );
}

export default Intro;