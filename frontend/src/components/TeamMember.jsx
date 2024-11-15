import Card from 'react-bootstrap/Card';

const TeamMember = ({ name, institution, picture}) => {
  return (
    <Card className="member">
      <img src={picture} alt="logo" style={{ height: "200px", margin:"auto", marginTop:"10px"}} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{institution}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TeamMember;