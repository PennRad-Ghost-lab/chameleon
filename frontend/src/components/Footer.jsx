import Navbar from 'react-bootstrap/Navbar';
import penn from '/penn.png';
import penn_medicine from '/penn-medicine.png';
import harvard_medicine from '/harvard-medicine.png';

const Footer = () => {
  return (
    <Navbar bg='light' variant="light" className='footer'>
      <img src={penn} alt="Penn" />
      <img src={penn_medicine} alt="Penn Medicine" />
      <img src={harvard_medicine} alt="Harvard Medicine" />
    </Navbar>
  );
}


export default Footer;