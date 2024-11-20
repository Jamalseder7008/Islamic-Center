import React from "react";
import "../styles/team.css"; // Custom styles for your page

interface TeamMember {
  id: string;
  name: string;
  position: string;
  description: string;
  contactEmail: string;
  contactPhone: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "john-doe",
    name: "John Doe",
    position: "Senior Accountant",
    description: "John specializes in tax planning and preparation, helping clients optimize their financial strategies.",
    contactEmail: "john.doe@example.com",
    contactPhone: "+1 234 567 8901",
  },
  {
    id: "jane-smith",
    name: "Jane Smith",
    position: "Business Consultant",
    description: "Jane helps businesses create strategic plans for growth and operational efficiency.",
    contactEmail: "jane.smith@example.com",
    contactPhone: "+1 234 567 8902",
  },
  {
    id: "michael-jones",
    name: "Michael Jones",
    position: "Audit Specialist",
    description: "Michael specializes in IRS representation and audit services, helping clients with regulatory compliance.",
    contactEmail: "michael.jones@example.com",
    contactPhone: "+1 234 567 8903",
  },
];

const OurTeam: React.FC = () => {
  // State to keep track of which team members have their contact info shown



  return (
    <div className="team-page">
      <h1>Our Team</h1>
      <div className="team-list">
        {teamMembers.map((member) => (
          <div key={member.id} id={member.id} className="team-member">
            <h2>{member.name}</h2>
            <p><strong>Position:</strong> {member.position}</p>
            <p><strong>Email:</strong> {member.contactEmail}</p>
            <p><strong>Phone:</strong> {member.contactPhone}</p>
            <p>{member.description}</p>
              
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
