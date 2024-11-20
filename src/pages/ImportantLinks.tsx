import React from "react";
import "../styles/ImportantLinks.css";

const ImportantLinks: React.FC = () => {
  const links = [
    {
      name: "IRS Home Page",
      description: "Access the main IRS website for general information and resources.",
      link: "https://www.irs.gov/",
    },
    {
      name: "IRS Tax Forms & Instructions",
      description: "Find all available tax forms, instructions, and publications.",
      link: "https://www.irs.gov/forms-instructions",
    },
    {
      name: "IRS E-file",
      description: "E-file your tax return quickly and securely through the IRS.",
      link: "https://www.irs.gov/filing/e-file-options",
    },
    {
      name: "Check Your Refund Status",
      description: "Track the status of your tax refund online.",
      link: "https://www.irs.gov/refunds",
    },
    {
      name: "Taxpayer Assistance Center",
      description: "Get help with tax issues and access assistance services.",
      link: "https://www.irs.gov/help/contact-your-local-irs-office",
    },
    {
      name: "IRS Payment Options",
      description: "Learn about various payment options for your taxes.",
      link: "https://www.irs.gov/payments",
    },
  ];

  return (
    <div className="links-page">
      <h1>Important IRS Links</h1>
      <div className="links-menu">
        {links.map((link, index) => (
          <a key={index} href={`#${link.name}`} className="link-item">
            {link.name}
          </a>
        ))}
      </div>
      <div className="links-list">
        {links.map((link, index) => (
          <div key={index} id={link.name} className="link-detail">
            <h2>{link.name}</h2>
            <p>{link.description}</p>
            <a href={link.link} target="_blank" rel="noopener noreferrer">
              <button>Visit Site</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImportantLinks;
