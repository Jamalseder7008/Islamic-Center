import React from "react";
import "../styles/team.css";

const OurTeam: React.FC = () => {
  return (
    <div className="team-page">
      <h1>Our Team</h1>
      <div className="team-list">
        <div className="team-member">
          <p style={{ textAlign: "center", fontSize: "1.1rem", color: "#555" }}>
            Team information coming soon. Please contact us at{" "}
            <strong>(504) 435-0951</strong> for more information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
