import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const CodeForm = (props) => {
  return <>
    <Modal show={props.showCode} onHide={props.handleCodeClose}>
      <Modal.Header closeButton>
        <Modal.Title>Verification Code</Modal.Title>
      </Modal.Header>
      <form onSubmit={props.handleCodeSubmit}>
        <Modal.Body>
          <div className="mb-3">
            <strong>Please enter the code send to your email to download:</strong>
            <input
              type="text"
              className="form-control"
              id="code"
              required
              value={props.code}
              onChange={(e) => props.setCode(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleCodeClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  </>
}

export default CodeForm;