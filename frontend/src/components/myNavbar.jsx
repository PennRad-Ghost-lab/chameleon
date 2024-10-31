import { Navbar, Container, Nav } from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <Navbar bg="white" fixed="top" expand="lg">
      <Container className="mx-4">
        <Navbar.Brand href="#home">
          Chameleon Dataset
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#download">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#paper">Paper</Nav.Link>
            <Nav.Link href="#team">Team</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;