import TeamMember from "./TeamMember";

const MeetTheTeam = () => {
  return (
    <div id="meet-team" style={{ width: "95%" }}>
      <h1>Meet the Team</h1>
      <div style={{ width: "95%", marginTop: "15px" }}>
        <div className="team-cards">
          
            <TeamMember name="John Doe" institution="University of Pennsylvania" />
            <TeamMember name="Jane Smith" institution="University of Pennsylvania" />
          
            <TeamMember name="Alice Johnson" institution="University of Pennsylvania" />
            <TeamMember name="Bob Brown" institution="University of Pennsylvania" />
            
            <TeamMember name="John Doe" institution="University of Pennsylvania" />
            <TeamMember name="Jane Smith" institution="University of Pennsylvania" />
          
            <TeamMember name="Alice Johnson" institution="University of Pennsylvania" />
            <TeamMember name="Bob Brown" institution="University of Pennsylvania" />
        </div>
      </div>
    </div>
  );
}

export default MeetTheTeam;