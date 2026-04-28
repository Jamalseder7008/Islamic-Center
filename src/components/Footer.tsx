import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #0f1f3d 0%, #162d6e 100%);
  border-radius: 16px;
  padding: 2rem 0;
  text-align: center;
  width: 100%;
  margin-top: 24px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const FooterLine = styled.p`
  font-size: 0.92rem;
  margin: 0;
  line-height: 1.6;
`;

const Credits = styled.p`
  font-size: 0.82rem;
  margin: 12px 0 0;
  color: rgba(255, 255, 255, 0.4);
`;

const WebLink = styled.a`
  color: #93c5fd;
  font-weight: 600;
  &:hover {
    color: #fff;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLine>
          <strong style={{ color: "#fff" }}>Islamic Center of New Orleans</strong>
        </FooterLine>
        <FooterLine>📍 1911 St. Claude Ave, New Orleans, LA 70122</FooterLine>
        <FooterLine>📞 +1 (504) 435-0951</FooterLine>
        <FooterLine>Open during prayer times</FooterLine>
        <Credits>
          Website built by <WebLink href="https://www.sedertech.com/">Seder Tech</WebLink>
        </Credits>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
