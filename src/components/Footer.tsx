
import React from "react";
// import { NavBtnLink } from "./NavbarElements";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #000000;
  border-radius: 25px;
  padding: 2rem 0;
  text-align: center;
  width: 100%;
  bottom: 0;
  margin-top: 24px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  color: #ffffff;
  margin: 0 auto;
  padding: 5px
`;


const ContactInfo = styled.p`
  font-size: 1rem;
`;

const AddressInfo = styled.p`
  font-size: 1rem;
`;

const HoursInfo = styled.p`
  font-size: 1rem;
`;

// const ExtraLinks = styled.a`
//   color: #ffffff; /* Changed text color to white */
//   margin-top: 1rem;
//   cursor: pointer;
//   &.active {
//     color: #16FF9D; /* Changed active link text color to greenish */
//   }
// `;


const Credits = styled.p`
  font-size: 1rem;
`;

const Footer: React.FC = () => {

  return (
    <FooterContainer>
      <FooterContent>
        <ContactInfo>
          Contact us through Phone: +1 (504) 435-0951
        </ContactInfo>
        <AddressInfo>
          Located at: 1911 St. Claude Ave, New Orleans, LA 70122
        </AddressInfo>
        <HoursInfo>
          Open During Prayer times
        </HoursInfo>


        <Credits>
          Website built by Seder Tech
        </Credits>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
