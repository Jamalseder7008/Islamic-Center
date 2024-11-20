import React from "react";
import styled from "styled-components";

const ServicesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
`;

const ServiceCard = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
`;

const ServiceTitle = styled.h2`
  font-size: 2rem;
  color: #333;
`;

const ServiceDescription = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

const Services: React.FC = () => {
  return (
    <ServicesContainer>
      <ServiceCard>
        <ServiceTitle>Tax Preparation</ServiceTitle>
        <ServiceDescription>
          We offer comprehensive tax preparation services tailored to your
          needs.
        </ServiceDescription>
      </ServiceCard>
      <ServiceCard>
        <ServiceTitle>Financial Consulting</ServiceTitle>
        <ServiceDescription>
          Expert financial consulting to help you make informed decisions.
        </ServiceDescription>
      </ServiceCard>
      <ServiceCard>
        <ServiceTitle>Bookkeeping</ServiceTitle>
        <ServiceDescription>
          Professional bookkeeping services to keep your records organized.
        </ServiceDescription>
      </ServiceCard>
      {/* Add more ServiceCard components as needed */}
    </ServicesContainer>
  );
};

export default Services;
