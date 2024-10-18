import { useState } from 'react';
import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '/logo.png';

const App = () => {

  return (
    <>
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
      <section className="ch-header">
        <div className="ch-header-content">
          <h1>Chameleon</h1>
          <h2 style = {{textAlign: 'center', color: 'white'}}>Synthetic Radiology Report Dataset</h2>
        </div>
      </section>
    </>
  );
}

export default App;