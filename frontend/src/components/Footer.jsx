import Navbar from 'react-bootstrap/Navbar';
import penn from '/penn.png';
import perelman from '/perelman.png';
import penn_medicine from '/penn-medicine.png';
import mass_general from '/mass-general.png';
import martinos from '/martinos.png';

const Footer = () => {
  return (
    <div className="footer">
      <img
        src={penn_medicine}
        alt="Penn Medicine"
        className='h-16 w-auto object-contain'
        style={{ height: "102px" }}
      />

      <img
        src={perelman}
        alt="Penn"
        className="h-16 w-auto object-contain"
        style={{ height: "100px" }}
      />
      <img
        src={mass_general}
        alt="Mass General"
        className="h-16 w-auto object-contain"
        style={{ height: "95px" }}
      />
    </div>
  );
}


export default Footer;