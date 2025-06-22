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



const PrayerTimes: React.FC = () => {


  return (
    <PrayerTimesContainer>
      <iframe
        src="https://timing.athanplus.com/masjid/widgets/embed?theme=1&masjid_id=wLVzbDLJ"
        width="100%"
        height="615"
        frameBorder="0"
        allowTransparency={true}
      ></iframe>
    </PrayerTimesContainer>
  );
};

export default PrayerTimes;
