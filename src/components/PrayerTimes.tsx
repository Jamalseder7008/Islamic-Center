import React from "react";
import styled from "styled-components";

const PrayerTimesContainer = styled.div`
  margin: 40px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 6px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  text-align: center;
`;

const PrayerTitle = styled.h3`
  font-size: 1.8em;
  color: #0c2b1e;
  margin-bottom: 20px;
`;

const PrayerTime = styled.div`
  font-size: 1.2rem;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
`;

const PrayerTimes: React.FC = () => {
  const times = {
    Fajr: "6:00 AM",
    Dhuhr: "1:00 PM",
    Asr: "3:30 PM",
    Maghrib: "Sunset",
    Isha: "7:00 PM",
    Jummah: "1:15 PM" 
  };

  return (
    <PrayerTimesContainer>
      <PrayerTitle>Prayer Iqama Times</PrayerTitle>
      {Object.entries(times).map(([prayer, time]) => (
        <PrayerTime key={prayer}>
          <span>{prayer}</span>
          <span>{time}</span>
        </PrayerTime>
      ))}
    </PrayerTimesContainer>
  );
};

export default PrayerTimes;
