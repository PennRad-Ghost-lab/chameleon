import { Navbar, Container } from 'react-bootstrap';
import logo from '/logo.png';

const myNavbar = () => {
  return (
    <Navbar bg="white" fixed="top">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img
              src={logo}
              alt="Logo"
              width="75" // Adjust width as needed
              height="75" // Adjust height as needed
              className="d-inline-block align-top"
            />{' '}
            <span className="ms-2">Penn Ghost Lab</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default myNavbar;