import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';

const MyNavbar = () => {
  return (
    <Navbar bg="white" fixed="top" expand="lg" id="navbar">
      <Container className="mx-4">
        <Navbar.Brand >
          <Nav.Link as={Link} to="header" smooth={true} duration={300}>Chameleon Dataset</Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="download" smooth={true} duration={300}>Download</Nav.Link>
            <Nav.Link as={Link} to="about" smooth={true} duration={300}>About</Nav.Link>
            <Nav.Link as={Link} to="about" smooth={true} duration={300}>Paper</Nav.Link>
            <Nav.Link as={Link} to="team" smooth={true} duration={300}>Team</Nav.Link>
            <Nav.Link as={Link} to="contact" smooth={true} duration={300}>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;