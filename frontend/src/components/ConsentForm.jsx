import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const ConsentForm = (props) => {
  return <>
    <Modal show={props.showModal} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Consent Form</Modal.Title>
      </Modal.Header>
      <form onSubmit={props.handleSubmit}>
        <Modal.Body>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              required
              value={props.firstName}
              onChange={(e) => props.setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              required
              value={props.lastName}
              onChange={(e) => props.setLastName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="institution" className="form-label">Institution</label>
            <input
              type="text"
              className="form-control"
              id="institution"
              required
              value={props.institution}
              onChange={(e) => props.setInstitution(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Contact Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              required
              value={props.email}
              onChange={(e) => props.setEmail(e.target.value)}
            />
          </div>
          <p>Please read the terms before downloading:</p>
          <p>By signing below, I affirm that the information I have provided is accurate and true to the best of my knowledge. Additionally, I agree to cite the source paper if you I any portion of the data contained herein, ensuring proper attribution to the authors and acknowledging the original source of the information. <br></br><br></br>This agreement signifies your commitment to upholding the ethical and scholarly standards expected in the use and distribution of research data.</p>
          <div>
            <input
              type="checkbox"
              checked={props.consentChecked}
              onChange={() => props.setConsentChecked(!props.consentChecked)}
            />
            <label className="ms-2">I acknowledge and agree to the terms.</label>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Cancel
          </Button>
          <Button variant="primary" type="submit" onClick={props.handleConsentSubmit}>
            Confirm Download
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  </>;
}

export default ConsentForm;