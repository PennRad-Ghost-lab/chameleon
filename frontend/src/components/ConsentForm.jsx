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
          <strong>Please read the terms before downloading:</strong>
          <p>By submitting my information and agreeing below, I confirm that:</p>
          <ol>
            <li>The information I have provided is accurate and true to the best of my knowledge.</li>
            <li><strong>Citation Requirement:</strong> I agree to cite the source paper in any publication, presentation, or other public disclosure that includes or references this dataset. This ensures proper attribution to the authors and acknowledges the original source of the data.</li>
            <li><strong>Permitted Use:</strong> I understand that this dataset is provided solely for <strong>research, educational, and non-commercial purposes.</strong> I agree not to use the dataset for any commercial purposes without prior written consent from the dataset providers.</li>
            <li><strong>Data Privacy and Security:</strong> I commit to handling the dataset responsibly, ensuring it is protected from unauthorized access, sharing, or redistribution.</li>
            <li><strong>No Redistribution:</strong> I agree not to share, distribute, or sublicense the dataset to third parties without explicit permission from the providers.</li>
            <li><strong>Assumption of Responsibility:</strong> I understand that improper use of the dataset may result in legal consequences or termination of access rights. I accept full responsibility for any consequences arising from my use of this dataset.</li>
            <li><strong>Agreement to Terms:</strong> This agreement signifies my commitment to uphold the ethical and scholarly standards expected in the use and distribution of research data.</li>
          </ol>
          <div>
            <input
              type="checkbox"
              checked={props.consentChecked}
              onChange={() => {
                props.setConsentChecked(!props.consentChecked)
              }}
            />
            <label className="ms-2">I acknowledge and agree to the terms.</label>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Confirm Download
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  </>;
}

export default ConsentForm;