import Card from 'react-bootstrap/Card';
import logo from '/logo.png';

const TeamMember = ({ name, institution }) => {
  return (
    <Card>
      <img src={logo} alt="logo" style={{ width: "200px", margin:"auto"}} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{institution}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TeamMember;