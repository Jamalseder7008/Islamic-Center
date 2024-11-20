import React from "react";
import styled from "styled-components";

const MapContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  transform: translateY(20px);
  opacity: 0;
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
  &.visible {
    transform: translateY(0);
    opacity: 1;
  }
`;

const MapEmbed: React.FC = () => {
  return (
    <MapContainer className="visible">
      <iframe
        className="map-iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55285.365202774025!2d-90.10751325253464!3d29.998526486082984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8620a61eb28b810b%3A0x131148e517490a17!2sIslamic%20Center!5e0!3m2!1sen!2sus!4v1732031599726!5m2!1sen!2sus"
        width="600"
        height="450"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </MapContainer>
  );
};

export default MapEmbed;
