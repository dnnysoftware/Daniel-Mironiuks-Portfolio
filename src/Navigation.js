import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from "react-bootstrap/Image";

function Navigation() {
  return (
    <Navbar className="fixed-top border-bottom" bg="light" variant="light" expand="lg" >
      <Image className='navbar-brand nav-spacing' src='./img/dm_logo.png' width="3%" height="3%"/>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className='nav-spacing' id="basic-navbar-nav">
        <Nav className="ml-auto nav-spacing">
          <Nav.Link href="#home">Projects</Nav.Link>
          <Nav.Link href="#about">Expirence</Nav.Link>
          <Nav.Link href="#services">Education</Nav.Link>
          <Nav.Link href="#contact">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;