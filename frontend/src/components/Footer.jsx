import Navbar from 'react-bootstrap/Navbar';
import penn from '/penn.png';
import perelman from '/perelman.png';
import penn_medicine from '/penn-medicine.png';
import mass_general from '/mass-general.png';
import harvard_med from '/harvard-medicine.png';


const Footer = () => {
  return (
    <div className="footer items-center">
        <a href={"https://www.pennmedicine.org/"} target="_blank" rel="noopener noreferrer">
            <img
                src={penn_medicine}
                alt="Penn Medicine"
                className='h-12 w-auto object-contain'
                style={{height: "75px"}}
            />
        </a>
        <a href="https://www.med.upenn.edu/" target="_blank" rel="noopener noreferrer">
            <img
                src={perelman}
                alt="Penn"
                className="h-12 w-auto object-contain"
                style={{height: "72px"}}
            />
        </a>
        <a href="https://hms.harvard.edu/" target="_blank" rel="noopener noreferrer">
            <img
                src={harvard_med}
                alt="Mass General"
                className="h-12 w-auto object-contain"
                style={{height: "80px"}}
            />
        </a>
    </div>
  );
}


export default Footer;