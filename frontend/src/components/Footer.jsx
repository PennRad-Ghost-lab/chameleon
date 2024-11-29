import Navbar from 'react-bootstrap/Navbar';
import penn from '/penn.png';
import perelman from '/perelman.png';
import penn_medicine from '/penn-medicine.png';
import mass_general from '/mass-general.png';
import harvard_med from '/harvard-medicine.png';


const Footer = () => {
  return (
    <div className="footer items-center">
      <img
        src={penn_medicine}
        alt="Penn Medicine"
        className='h-12 w-auto object-contain'
        style={{ height: "51px" }}
      />

      <img
        src={perelman}
        alt="Penn"
        className="h-12 w-auto object-contain"
        style={{ height: "50px" }}
      />
      <img
        src={harvard_med}
        alt="Mass General"
        className="h-12 w-auto object-contain"
        style={{ height: "55px" }}
      />
    </div>
  );
}


export default Footer;