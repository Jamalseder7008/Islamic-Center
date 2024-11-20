import React from "react";
import "../styles/services.css"; // Custom styles for your page

interface Service {
  id: string;
  title: string;
  description: string;
  details: string;
}

const services: Service[] = [
  {
    id: "daily-prayers",
    title: "Daily Prayers",
    description: "Congregational prayers five times a day.",
    details: "Join us for daily prayers in congregation to strengthen your connection with Allah and the community.",
  },
  {
    id: "friday-sermons",
    title: "Friday Sermons (Khutbah)",
    description: "Weekly Friday sermons addressing contemporary issues.",
    details: "Listen to insightful khutbahs that provide spiritual guidance and practical lessons for everyday life.",
  },
  {
    id: "quran-classes",
    title: "Qur'an Classes",
    description: "Classes for children and adults to learn Qur'an recitation and understanding.",
    details: "Our Qur'an classes focus on Tajweed, memorization, and understanding the meanings of the verses.",
  },
  {
    id: "community-counseling",
    title: "Community Counseling",
    description: "Spiritual and emotional support for individuals and families.",
    details: "Our counseling services provide guidance on personal, family, and spiritual challenges, grounded in Islamic principles.",
  },
  {
    id: "islamic-lectures",
    title: "Islamic Lectures",
    description: "Educational sessions on various Islamic topics.",
    details: "Attend our lectures to deepen your knowledge of Islamic history, theology, and contemporary issues.",
  },
  {
    id: "marriage-services",
    title: "Marriage Services",
    description: "Nikah ceremonies and marital counseling.",
    details: "We offer marriage services including Nikah officiation and pre-marital or marital counseling.",
  },
  {
    id: "zakat-assistance",
    title: "Zakat & Charity Assistance",
    description: "Guidance and distribution of Zakat and Sadaqah.",
    details: "We facilitate the distribution of Zakat and Sadaqah to those in need, ensuring it aligns with Islamic guidelines.",
  },
  {
    id: "youth-programs",
    title: "Youth Programs",
    description: "Activities and workshops for young Muslims.",
    details: "Our youth programs aim to engage young Muslims in meaningful activities, fostering spiritual growth and leadership skills.",
  },
  {
    id: "interfaith-dialogue",
    title: "Interfaith Dialogue",
    description: "Building understanding with other faith communities.",
    details: "We host interfaith events to promote understanding, respect, and collaboration between different faith groups.",
  },
  {
    id: "funeral-services",
    title: "Funeral Services",
    description: "Support for Islamic burial rites.",
    details: "We provide guidance and support for Janazah prayers and burial services, ensuring they are conducted according to Islamic practices.",
  },
  {
    id: "ramadan-programs",
    title: "Ramadan Programs",
    description: "Taraweeh prayers, Iftars, and Ramadan activities.",
    details: "Join us during Ramadan for Taraweeh prayers, community Iftars every night, and spiritual programs.",
  },
];

const Services: React.FC = () => {
  return (
    <div className="services-page">
      <h1 color="#000">Our Services</h1>
      <div className="services-menu">
        {services.map((service) => (
          <a key={service.id} href={`#${service.id}`} className="service-link">
            {service.title}
          </a>
        ))}
      </div>
      <div className="services-list">
        {services.map((service) => (
          <div key={service.id} id={service.id} className="service-item">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <button onClick={() => toggleDetails(service.id)}>Learn More</button>
            <p className="service-details" id={`${service.id}-details`} style={{ display: "none" }}>
              {service.details}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

function toggleDetails(id: string) {
  const detailsElement = document.getElementById(`${id}-details`);
  if (detailsElement) {
    detailsElement.style.display = detailsElement.style.display === "block" ? "none" : "block";
  }
}

export default Services;
