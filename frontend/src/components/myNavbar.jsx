import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';

const MyNavbar = () => {
  return (
    <Navbar fixed="top" expand="lg" id="navbar">
      <Container className="mx-4">
        <Navbar.Brand >
          <Nav.Link id='title' as={Link} to="header" smooth={true} duration={300}>Chameleon Dataset</Nav.Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;