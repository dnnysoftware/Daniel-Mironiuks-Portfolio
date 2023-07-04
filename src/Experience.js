import {Card, CardGroup, Image} from 'react-bootstrap';
import './css/Expirence.css';

function Experience() {
    return (
        <div className='expirence-section' id='expirence'>
            <div className='expirence-content text-center'>
                <h1 className='text expire-title'>Experience</h1>
                <div className='all-expirences d-flex align-items-center'>
                    <CardGroup>
                        <Card className='expirence-card d-flex flex-column' bg='dark' text='light' border='success'>
                            <Card.Header className='text pos'><Image height='100vh' src='img/foundry.png' alt='Foundry Digital' fluid /></Card.Header>
                            <Card.Header className='text pos'>May 2022 - August 2022</Card.Header>
                            <Card.Body className='d-flex flex-column align-items-center'>
                                <Card.Text className='text'>
                                    Worked to create a web application using Rust's web framework Yew 
                                    to interface with GPS data being serialized on the Helium Network. 
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
                            <Card.Header className='text pos'><Image height='100vh' src='img/sandstone.png' alt='Sandstone Technologies' fluid /></Card.Header>
                            <Card.Header className='text pos'>May 2021 - May 2022</Card.Header>
                            <Card.Body className='d-flex flex-column align-items-center'>
                                <Card.Text className='text'>
                                    Worked on developing the in-house software for encoding bytes on 
                                    various form factors of fiber optic transceivers. Inclusive with the 
                                    program which I aided in are printing capabilities for labels, CRUD-based 
                                    functionality for purchase orders & transceiver parts, non-relational DBMS management, 
                                    creating GUI's for CLI based network switches for fiber optic testing 
                                    purposes, and CRC brute force algorithms for unlocking passwords to various 
                                    fiber optics.
                                </Card.Text>
                            </Card.Body>
                        </Card>   
                        <Card className='expirence-card card d-flex flex-column' bg='dark' text='light' border='success'>
                            <Card.Header className='text pos'><Image height='100vh' src='img/asl.png' alt='Access ASL' fluid /></Card.Header>
                            <Card.Header className='text pos'>March 2019 - August 2019</Card.Header>
                            <Card.Body className='d-flex flex-column align-items-center'>
                                <Card.Text className='text'>
                                    Worked as a web developer and a software engineer of a start-up Access ASL which 
                                    is an intuitive web-mobile game designed to teach American Sign Language through
                                    RIT's National Technical Institute of the Deaf program.The product was created in Unity. 
                                    Created an RB binary tree for Vector3 components to map hand sign language positioning. 
                                    Also developed the web application landing page for marketing and promotions.

                                </Card.Text>
                            </Card.Body>
                        </Card>   
                    </CardGroup>
                </div>
            </div>
        </div>
    );
}

export default Experience;