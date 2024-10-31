import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/myNavbar';
import MyHeader from './components/myHeader';
import Footer from './components/Footer';
import About from './components/About';
import MeetTheTeam from './components/MeetTheTeam';
import Contact from './components/Contact';
import ConsentForm from './components/ConsentForm';
import csvService from './services/csvService';
import personService from './services/personService';
import CSV from './components/myCsv';
import { useState, useEffect } from 'react';

const App = () => {
  // const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  // const [selectedId, setSelectedId] = useState(null);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [institution, setInstitution] = useState('');
  const [email, setEmail] = useState('');
  const [consentChecked, setConsentChecked] = useState(false);

  // useEffect(() => {
  //   console.log("Fetching data");
  //   csvService.getAll().then(fetchedData => {
  //     setData(fetchedData);
  //     console.log("Data fetched"); // Log fetched data here
  //   });
  // }, []);

  const handleShow = (id) => {
    // setSelectedId(id);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    // setSelectedId(null);
    setConsentChecked(false);
  };

  const handleConsentSubmit = () => {
    const data = {
      firstName,
      lastName,
      institution,
      email
    };
    if (consentChecked) {
      handleDownload();
      personService.create(data).then(response => {
        console.log('Consent submitted');
        handleClose();
      });
    }
  };

  const handleDownload = async () => {
    console.log('Initiating download from App.jsx');

    try {
      const { content, filename } = await csvService.downloadAll();

      // Create a blob and download link
      const blob = new Blob([content], { type: 'application/zip' });
      const link = document.createElement('a');

      // Create downloadable link
      if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, filename);
      } else {
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (error) {
      console.error('Download failed:', error);
      alert('Failed to download file. Please try again.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    // if (!firstName || !lastName || !institution || !email) {
    //   alert('All fields are required.');
    //   return;
    // }

    // Call the handle consent submit function with form data
    handleConsentSubmit();
  };


  return (
    <>
      <MyNavbar />
      <section id="header">
        <MyHeader />
      </section>

      <section id="about" >
        <About />
      </section>

      <section id="team">
        <MeetTheTeam />
      </section>

      <section id="data-section">
        <CSV handleShow={handleShow} />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <ConsentForm
        showModal={showModal}
        handleClose={handleClose}
        handleConsentSubmit={handleConsentSubmit}

        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        institution={institution}
        setInstitution={setInstitution}
        email={email}
        setEmail={setEmail}
        consentChecked={consentChecked}
        setConsentChecked={setConsentChecked}

        handleSubmit={handleSubmit}
      />
      <Footer />
    </>
  );
}

export default App;