import Navbar from 'react-bootstrap/Navbar';
import penn from '/penn.png';
import perelman from '/perelman.png';
import harvard_medicine from '/harvard-medicine.png';
import mass_general from '/mass-general.png';
import martinos from '/martinos.png';

const Footer = () => {
  return (
    <Navbar
      bg='light'
      variant="light"
      className='footer w-full p-4'
    >
      <div className="flex flex-wrap items-center justify-center gap-8 w-full" style={{justifyContent:"center"}}>
        <img
          src={perelman}
          alt="Penn"
          className="h-16 w-auto object-contain"
          style={{height:"70px"}}
        />
        <img
          src={mass_general}
          alt="Mass General"
          className="h-16 w-auto object-contain"
          style={{height:"65px"}}
        />
      </div>
    </Navbar>
  );
}


export default Footer;