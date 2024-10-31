//bootstrap button
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CSV = ({ handleShow }) => {
  return (
    <div id='csv-table'>
      <h1>Download the Data</h1>
      <Button className="show-button" variant="dark" onClick={() => handleShow()} style={{marginLeft:"55px"}}>Download</Button>
    </div>
  )
}

export default CSV;