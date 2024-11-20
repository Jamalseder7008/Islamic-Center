import React from "react";
import "../styles/FinancialTools.css";

const FinancialTools: React.FC = () => {
  const tools = [
    {
      name: "Mortgage Calculator",
      description: "Calculate your monthly mortgage payments based on loan amount, interest rate, and term.",
      link: "https://www.mortgagecalculator.org/",
    },
    // {
    //   name: "Budget Planner",
    //   description: "Plan your monthly and annual budget to manage expenses and savings effectively.",
    //   link: "https://example.com/budget-planner",
    // },
    {
      name: "Retirement Savings",
      description: "Estimate the amount you need to save to reach your retirement goals.",
      link: "https://www.nerdwallet.com/calculator/retirement-calculator",
    },
    {
      name: "Tax Estimator",
      description: "Estimate your income tax based on your earnings and deductions.",
      link: "https://www.irs.gov/individuals/tax-withholding-estimator",
    },
  ];

  return (
    <div className="tools-page">
      <h1>Financial Tools</h1>
      <div className="tools-menu">
        {tools.map((tool, index) => (
          <a key={index} href={`#${tool.name}`} className="tool-link">
            {tool.name}
          </a>
        ))}
      </div>
      <div className="tools-list">
        {tools.map((tool, index) => (
          <div key={index} id={tool.name} className="tool-item">
            <h2>{tool.name}</h2>
            <p>{tool.description}</p>
            <a href={tool.link} target="_blank" rel="noopener noreferrer">
              <button>Go to Tool</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinancialTools;
