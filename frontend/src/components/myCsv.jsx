//bootstrap button
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const CSV = ({ data, handleShow }) => {
  return (
    <Table striped bordered hover size="sm" id='csv-table'>
      <tbody>
      {data.map(csv =>
        <tr key={csv.id}>
          <td><a>Read the Paper</a></td>
          <td><Button className="show-button" variant="primary" onClick={() => handleShow(csv.id)}>Download</Button></td>
        </tr>)}
      </tbody>
    </Table>
  )
}

export default CSV;