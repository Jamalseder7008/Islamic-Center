import React from "react";
import styled from "styled-components";
import "../styles/Home.css";
// import { View, Image } from "@aws-amplify/ui-react"; // Import necessary components from Amplify UI
// import logo from "../assets/ICLogoOG.png"; // Adjust the path if necessary
import MapEmbed from "./MapEmbed.tsx"; // New Map component
import PrayerTimes from "../components/PrayerTimes"; // Adjust the path if necessary

const PageContainer = styled.div`
  padding: 0px 0px;
  font-family: "Roboto", sans-serif;
`;

// const Title = styled.h1`
//   text-align: center;
//   font-size: 2.5em;
//   color: #0c2b1e;
//   margin-bottom: 30px;
//   font-weight: 600;
// `;

// const Subtitle = styled.p`
//   text-align: center;
//   font-size: 1.5rem;
//   color: #0c2b1e;
//   margin-bottom: 30px;
// `;

const LinksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const LinkItem = styled.div`
  padding: 25px;
  border: 1px solid #e0e0e0;
  background-color: #ffffff;
  border-radius: 6px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }
`;

const LinkItemTitle = styled.h2`
  font-size: 1.8em;
  color: #000;
  margin-bottom: 10px;
`;

const LinkItemParagraph = styled.p`
  font-size: 1rem;
  color: #000;
  line-height: 1.6;
`;

const StyledMapEmbed = styled.div`
  margin-top: 60px;
`;


const Home: React.FC = () => {
  return (
    <PageContainer>
      {/* Title and Subtitle */}

      {/* Links List Section */}
      <LinksList>
        <LinkItem>
          <LinkItemTitle>Islamic Center of New Orleans</LinkItemTitle>
          <PrayerTimes />
          <LinkItemParagraph>
            The Islamic Center is a very well established masjid within the New Orleans Community.
            It is frequented by many locals for all five daily prayers
          </LinkItemParagraph>
        </LinkItem>

        {/* Additional link items can be added here */}
      </LinksList>

      {/* Map Embed Section */}
      <StyledMapEmbed>
        <MapEmbed />
      </StyledMapEmbed>

    </PageContainer>
  );
};

export default Home;
