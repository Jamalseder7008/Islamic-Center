import React from "react";
import styled from "styled-components";
import "../styles/Home.css";
import logo from "../assets/ICLogoOG.png";
import MapEmbed from "./MapEmbed.tsx";
import PrayerTimes from "../components/PrayerTimes";

const PageContainer = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const HeroSection = styled.div`
  background-color: #ffffff;
  border: 1px solid #e4e4e4;
  border-radius: 14px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);
  padding: 32px 24px 24px;
  text-align: center;
`;

const MasjidName = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  color: #1e3a8a;
  margin: 0 0 6px 0;
  text-align: center;
  &::after { display: none; }
`;

const MasjidTagline = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.65;
  max-width: 560px;
  margin: 0 auto 28px;
`;

const LogoImg = styled.img`
  height: 140px;
  width: auto;
  object-fit: contain;
  margin-bottom: 16px;
  transition: filter 300ms;
  &:hover {
    filter: drop-shadow(0 0 12px rgba(231, 196, 66, 0.6));
  }
  @media (max-width: 480px) {
    height: 110px;
  }
`;

const AnnouncementsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const AnnouncementCard = styled.div`
  background-color: #1e3a8a;
  color: #ffffff;
  border-radius: 10px;
  padding: 18px 20px;
  border-left: 4px solid #15803d;
  text-align: left;
  h3 {
    font-size: 1rem;
    font-weight: 700;
    color: gold;
    margin: 0 0 6px 0;
  }
  p {
    font-size: 0.9rem;
    line-height: 1.6;
    margin: 0;
    color: #dde8f5;
  }
`;

const PrayerSection = styled.div`
  background-color: #ffffff;
  border: 1px solid #e4e4e4;
  border-radius: 14px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);
  padding: 28px 24px;
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e3a8a;
  margin: 0 0 16px 0;
  text-align: center;
  &::after { display: none; }
`;

const Home: React.FC = () => {
  return (
    <PageContainer>

      {/* Hero — logo, name, tagline, announcements */}
      <HeroSection>
        <LogoImg src={logo} alt="Islamic Center of New Orleans logo" className="logo" />
        <MasjidName>Islamic Center of New Orleans</MasjidName>
        <MasjidTagline>
          A welcoming masjid serving the New Orleans community with daily prayers,
          education, and spiritual support for all Muslims.
        </MasjidTagline>

        <AnnouncementsGrid>
          <AnnouncementCard>
            <h3>Jumu'ah Khutbah</h3>
            <p>
              Friday Khutbah begins at{" "}
              <strong style={{ color: "gold" }}>1:30 PM</strong> every week.
              Join us for congregational Jumu'ah prayer.
            </p>
          </AnnouncementCard>
          <AnnouncementCard>
            <h3>Saturday Night Gathering</h3>
            <p>
              Brothers are invited every{" "}
              <strong style={{ color: "gold" }}>
                Saturday night between Maghrib and Isha
              </strong>{" "}
              for knowledge, community, and brotherhood.
            </p>
          </AnnouncementCard>
        </AnnouncementsGrid>
      </HeroSection>

      {/* Prayer times widget */}
      <PrayerSection>
        <SectionTitle>Today's Prayer Times</SectionTitle>
        <PrayerTimes />
      </PrayerSection>

      {/* Map */}
      <MapEmbed />

    </PageContainer>
  );
};

export default Home;
