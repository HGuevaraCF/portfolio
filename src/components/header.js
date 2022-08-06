import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return(
        <Navbar className='navbar' expand="lg">
        <Container>
          <Navbar.Brand href="#home">Hector Guevara</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/portfolio">About Me</Nav.Link>
              <Nav.Link href="/portfolio/work">Portfolio</Nav.Link>
              <Nav.Link href="/portfolio/contact">Contact</Nav.Link>
              <Nav.Link href="/portfolio/resume">Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Header;