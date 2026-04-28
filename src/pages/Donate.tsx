import React from "react";
import "../styles/Donate.css";

// Save your QR code images to src/assets/ with these exact filenames:
//   src/assets/zelle-qr.png
//   src/assets/venmo-qr.png
//   src/assets/cashapp-qr.png
import zelleQr from "../assets/zelle-qr.jpeg";
import venmoQr from "../assets/venmo-qr.jpeg";
import cashappQr from "../assets/cashapp-qr.jpeg";

const Donate: React.FC = () => {
  return (
    <div className="donate-page">
      <h1>Support the Islamic Center</h1>
      <div className="donate-intro">
        <p>
          Your generous donations help us maintain our masjid, serve the community, and
          continue our programs including Qur'an classes, youth programs, and charitable
          outreach. May Allah bless you and your families for your contributions.
        </p>
        <p>
          <em>"The example of those who spend their wealth in the way of Allah is like a
          seed of grain that sprouts seven spikes; in each spike there are a hundred
          grains." — Surah Al-Baqarah 2:261</em>
        </p>
      </div>

      <a
        href="https://payments.madinaapps.com/icnola"
        target="_blank"
        rel="noopener noreferrer"
        className="donate-portal-btn"
      >
        Donate Online via Donation Portal
      </a>

      <div className="donate-divider">
        <span>or donate directly via</span>
      </div>

      <div className="donate-methods">

        <div className="donate-card">
          <div className="donate-card-info">
            <h2>Zelle</h2>
            <p>Send your donation directly via Zelle — fast, free, and secure.</p>
            <p>Scan the QR code or send to:</p>
            <span className="donate-handle">(504) 435-0951</span>
          </div>
          <div className="donate-qr">
            <img src={zelleQr} alt="Zelle QR code for Islamic Center of New Orleans" />
            <p>Scan to donate</p>
          </div>
        </div>

        <div className="donate-card">
          <div className="donate-card-info">
            <h2>Venmo</h2>
            <p>Donate via Venmo using our handle or by scanning the QR code.</p>
            <span className="donate-handle">@islamiccenter1911</span>
          </div>
          <div className="donate-qr">
            <img src={venmoQr} alt="Venmo QR code for Islamic Center of New Orleans" />
            <p>Scan to donate</p>
          </div>
        </div>

        <div className="donate-card">
          <div className="donate-card-info">
            <h2>Cash App</h2>
            <p>Send your donation through Cash App using our cashtag.</p>
            <span className="donate-handle">$IslamiccenterNOLA</span>
          </div>
          <div className="donate-qr">
            <img src={cashappQr} alt="Cash App QR code for Islamic Center of New Orleans" />
            <p>Scan to donate</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Donate;
