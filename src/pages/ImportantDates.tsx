import React from "react";
import "../styles/ImportantLinks.css";

interface IslamicDate {
  name: string;
  arabicName: string;
  description: string;
  date: string;
  hijriDate: string;
}

const islamicDates: IslamicDate[] = [
  {
    name: "Eid al-Adha",
    arabicName: "عيد الأضحى",
    description:
      "The Festival of Sacrifice commemorates Prophet Ibrahim's willingness to sacrifice his son as an act of obedience to Allah. Muslims perform Eid prayer, sacrifice an animal (Udhiyah), and share the meat with family, neighbors, and those in need.",
    date: "~May 27, 2026",
    hijriDate: "Dhul-Hijja 10, 1447 AH",
  },
  {
    name: "Day of Arafah",
    arabicName: "يوم عرفة",
    description:
      "The holiest day of the Islamic year. Pilgrims gather on the plain of Arafah during Hajj. Fasting on this day for non-pilgrims expiates sins of the previous and coming year.",
    date: "~May 26, 2026",
    hijriDate: "Dhul-Hijja 9, 1447 AH",
  },
  {
    name: "Islamic New Year",
    arabicName: "رأس السنة الهجرية",
    description:
      "The first day of Muharram marks the beginning of the new Islamic Hijri year. It commemorates the Hijra (migration) of the Prophet Muhammad ﷺ from Mecca to Medina.",
    date: "~June 16, 2026",
    hijriDate: "Muharram 1, 1448 AH",
  },
  {
    name: "Day of Ashura",
    arabicName: "يوم عاشوراء",
    description:
      "The 10th of Muharram. The Prophet Muhammad ﷺ encouraged fasting on this day. It is also the day Allah saved Prophet Musa (Moses) and the Children of Israel from Pharaoh.",
    date: "~June 25, 2026",
    hijriDate: "Muharram 10, 1448 AH",
  },
  {
    name: "Mawlid al-Nabi",
    arabicName: "المولد النبوي الشريف",
    description:
      "Celebration of the birth of the Prophet Muhammad ﷺ. Many Muslims observe this day with gatherings, prayers, and remembrance of the Prophet's life and teachings.",
    date: "~August 26, 2026",
    hijriDate: "Rabi' al-Awwal 12, 1448 AH",
  },
  {
    name: "Ramadan Begins",
    arabicName: "بداية رمضان",
    description:
      "The blessed month of fasting, prayer, reflection, and community. Muslims fast from Fajr to Maghrib each day. Join us for Taraweeh prayers and community Iftars every night at the Islamic Center.",
    date: "~February 6, 2027",
    hijriDate: "Ramadan 1, 1448 AH",
  },
  {
    name: "Laylat al-Qadr",
    arabicName: "ليلة القدر",
    description:
      "The Night of Power — better than a thousand months. It falls in the last ten nights of Ramadan, most likely the 27th. The Islamic Center holds special night prayers during the last ten nights.",
    date: "~March 4, 2027 (approx.)",
    hijriDate: "Ramadan 27, 1448 AH",
  },
  {
    name: "Eid al-Fitr",
    arabicName: "عيد الفطر",
    description:
      "The Festival of Breaking the Fast marks the end of Ramadan. Muslims gather for Eid prayer, pay Zakat al-Fitr, and celebrate with family and community. Join us at the Islamic Center for Eid prayer.",
    date: "~March 8, 2027",
    hijriDate: "Shawwal 1, 1448 AH",
  },
];

const ImportantDates: React.FC = () => {
  return (
    <div className="links-page">
      <h1>Important Islamic Dates</h1>
      <p style={{ textAlign: "center", color: "#000", marginBottom: "30px", fontSize: "0.95rem" }}>
        * Dates are approximate and subject to moon sighting confirmation.
      </p>
      <div className="links-list">
        {islamicDates.map((item, index) => (
          <div key={index} className="link-detail">
            <h2>
              {item.name}{" "}
              <span style={{ fontWeight: 400, fontSize: "0.85em", color: "#555" }}>
                — {item.arabicName}
              </span>
            </h2>
            <p>{item.description}</p>
            <p>
              <strong>Date:</strong> {item.date}
            </p>
            <p>
              <strong>Hijri:</strong> {item.hijriDate}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImportantDates;
