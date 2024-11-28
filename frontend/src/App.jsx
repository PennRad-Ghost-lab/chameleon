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
import CodeForm from './components/CodeForm';
import { useState, useEffect } from 'react';
import { set } from 'mongoose';
import emailjs from '@emailjs/browser';
import WaitlistSignup from "./components/WaitListSignup.jsx";

const App = () => {
  // const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  // const [selectedId, setSelectedId] = useState(null);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [institution, setInstitution] = useState('');
  const [email, setEmail] = useState('');
  const [consentChecked, setConsentChecked] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const [code, setCode] = useState('');
  const [validationCode, setValidationCode] = useState('');

  const handleShow = (id) => {
    setShowModal(true);
  };

  const handleCodeClose = () => {
    setConsentChecked(false);
    setShowCode(false);
    setCode('');
    setValidationCode(generateCode());
  };

  const generateCode = () => {
    const code = Math.floor(100000 + Math.random() * 900000);
    // console.log('Generated code:', code);
    return code;
  };

  const handleCodeSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh

    const data = {
      firstName,
      lastName,
      institution,
      email
    };

    if (consentChecked && code == validationCode) {
      handleDownload();
      personService.create(data).then(response => {
        console.log('Consent submitted');
        setConsentChecked(false);
        setCode('');
        setShowCode(false);
        setValidationCode('');
      });
    } else {
      alert('Invalid code. Please try again.');
    }
  }

  const handleClose = () => {
    setShowModal(false);
    setConsentChecked(false);
  };

  const sendVerificationEmail = (code) => {
    const templateParams = {
        to_email: email,
        verification_code: code,
    };

    // console.log('Sending verification email:', templateParams);

    emailjs.send('service_ieesieu', 'template_1hgyx3i', templateParams, {publicKey: 'TvffD1g5go9bZ-GGD'})
        .then((response) => {
            console.log("Verification email sent successfully:", response);
            console.log('Verification code sent');
        })
        .catch((error) => {
            console.error("Error sending verification email:", error);
        });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    // console.log('Form submitted', consentChecke);

    if (consentChecked) {
        const code = generateCode(); // Generate the code
        setValidationCode(code); // Set the state (if you need it elsewhere)
        // console.log('Validation code:', code); // Log the generated code directly

        sendVerificationEmail(code); // Pass the code directly to the email function
        handleConsentSubmit();
    } else {
        alert('Please agree to the terms before submitting.');
    }
};

  const handleConsentSubmit = () => {
    setShowModal(false);
    setShowCode(true);
  };

  const handleDownload = async () => {
    console.log('Initiating download...');

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

  return (
    <>
      <MyNavbar />
      <section id="header">
        <MyHeader />
      </section>

        {/*<section id="about">*/}
        {/*    <WaitlistSignup />*/}
        {/*</section>*/}

      <section id="about" >
        <About handleShow={handleShow} />
      </section>

      <section id="team">
        <MeetTheTeam />
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

      <CodeForm
        showCode={showCode}
        handleCodeClose={handleCodeClose}
        handleCodeSubmit={handleCodeSubmit}
        code={code}
        setCode={setCode}
      />

      <Footer />
    </>
  );
}

export default App;