import {Card, CardGroup} from 'react-bootstrap';
import MatrixRainAnimation from './Animation';
import './css/Expirence.css';

function Expirence() {
    return (
        <div className='expirence-section'>
            <div className='expirence-content'>
                <h1 className='text'>Expirence</h1>
                <div className='all-expirences d-flex align-items-center'>
                    <CardGroup>
                        <Card className='expirence-card d-flex flex-column' bg='dark' text='light' border='success'>
                            <Card.Header className='text pos'>Foundry Digital</Card.Header>
                            <Card.Header className='text pos'>May 2022 - August 2022</Card.Header>
                            <Card.Body className='d-flex flex-column align-items-center'>
                                <Card.Text className='text'>
                                    Worked to create a web application using Rust's web framework Yew 
                                    to interface with gps data being serialized on the Helium Network. 
                                    GPS data would be stored within MongoDB after connecting to the nearest 
                                    Helium hotspot which a user can derive and see the positioning through the 
                                    google maps api. I worked on many full stack components especially on UX/UI design, 
                                    routing and CRUD based api calls with our MongoDB instance as well as aided 
                                    hardware configuration with a raspberry pi 4 and a LoRaWan GPS hat for our proof 
                                    of concept model.
                                </Card.Text>
                            </Card.Body>
                        </Card>   
                        <Card className='expirence-card d-flex flex-column' bg='dark' text='light' border='success'>
                            <Card.Header className='text pos'>Sandstone Technologies</Card.Header>
                            <Card.Header className='text pos'>May 2021 - May 2022</Card.Header>
                            <Card.Body className='d-flex flex-column align-items-center'>
                                <Card.Text className='text'>
                                    Worked on developing the in-house software for encoding bytes on 
                                    various form factors of fiber optic transceivers. Inclusive with the 
                                    program is printing capabilities for labels, CRUD functions for 
                                    purchase orders/ transceiver parts, non-relational DBMS management, 
                                    creating GUI's for CLI based network switches for fiber optic testing 
                                    purposes, and CRC brute force algorithms for unlocking passwords to various 
                                    fiber optics.
                                </Card.Text>
                            </Card.Body>
                        </Card>   
                        <Card className='expirence-card card d-flex flex-column' bg='dark' text='light' border='success'>
                            <Card.Header className='text pos'>Access ASL</Card.Header>
                            <Card.Header className='text pos'>March 2019 - August 2019</Card.Header>
                            <Card.Body className='d-flex flex-column align-items-center'>
                                <Card.Text className='text'>
                                    Web developer and a software engineer of a start-up Access ASL which 
                                    is an intuitive web-mobile game designed to teach American Sign Language.
                                    The product was created in Unity. Created an RB Binary Tree for Vector3 
                                    components to map hand sign language positioning.
                                </Card.Text>
                            </Card.Body>
                        </Card>   
                    </CardGroup>
                </div>
            </div>
        </div>
    );
}

export default Expirence;