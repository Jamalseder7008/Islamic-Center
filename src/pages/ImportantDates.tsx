import React from "react";
import "../styles/ImportantLinks.css";

const ImportantDates: React.FC = () => {
  const dates = [
    {
      name: "Individual Tax Return Deadline",
      description: "The deadline to file your Form 1040 for the tax year.",
      date: "April 15",
    },
    {
      name: "Quarterly Estimated Taxes (Q1)",
      description: "Estimated tax payments for the first quarter are due.",
      date: "April 15",
    },
    {
      name: "Quarterly Estimated Taxes (Q2)",
      description: "Estimated tax payments for the second quarter are due.",
      date: "June 17",
    },
    {
      name: "Quarterly Estimated Taxes (Q3)",
      description: "Estimated tax payments for the third quarter are due.",
      date: "September 16",
    },
    {
      name: "Quarterly Estimated Taxes (Q4)",
      description: "Estimated tax payments for the fourth quarter are due.",
      date: "January 15",
    },
    {
      name: "Extended Individual Tax Return Deadline",
      description: "If you filed for an extension, this is the last day to submit.",
      date: "October 15",
    },
  ];

  return (
    <div className="links-page">
      <h1>Important Tax Due Dates</h1>
      <div className="links-list">
        {dates.map((date, index) => (
          <div key={index} id={date.name} className="link-detail">
            <h2>{date.name}</h2>
            <p>{date.description}</p>
            <p>
              <strong>Due Date:</strong> {date.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImportantDates;
