import Table from 'react-bootstrap/Table';

const MeetTheTeam = () => {
  return (
    <div id="meet-team">
      <h1>Meet the Team</h1>
      <Table striped bordered hover size="sm" id='team-table'>
        <tbody>
          <tr>
            <td>Alice</td>
            <td>Bob</td>
          </tr>
          <tr>
            <td>Charlie</td>
            <td>David</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default MeetTheTeam;