import { Navbar, Container, Nav } from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <Navbar bg="white" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
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