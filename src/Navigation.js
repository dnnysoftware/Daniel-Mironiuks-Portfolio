import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from "react-bootstrap/Image";
import './css/Navigation.css';

function Navigation() {



  return (
    <Navbar className="fixed-top border-bottom" bg="light" variant="light" expand="lg" >
      <Nav.Link href="#home"><Image className='navbar-brand nav-spacing' src='./img/dm_logo.png' width="50" height="50"/></Nav.Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className='nav-spacing'/>
      <Navbar.Collapse className='nav-spacing' id="basic-navbar-nav">
        <Nav className="ml-auto nav-spacing">
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#expirence">Expirence</Nav.Link>
          <Nav.Link href="#education">Education</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;