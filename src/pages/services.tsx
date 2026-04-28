import React, { useState } from "react";
import {
  FaHandsPraying,
  FaMicrophone,
  FaBookOpen,
  FaComments,
  FaChalkboardUser,
  FaHeart,
  FaHandHoldingHeart,
  FaChildren,
  FaHandshake,
  FaDove,
  FaMoon,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa6";
import "../styles/services.css";

interface Service {
  id: string;
  title: string;
  description: string;
  details: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: "daily-prayers",
    title: "Daily Prayers",
    description:
      "Join us for all five congregational prayers every day at the masjid. Praying in congregation carries 27 times the reward of praying alone.",
    details:
      "The Islamic Center is open for all five daily prayers — Fajr, Dhuhr, Asr, Maghrib, and Isha. Prayer times follow the standard schedule and are updated monthly. All are welcome to pray with us and strengthen their bond with Allah and the community.",
    icon: <FaHandsPraying />,
  },
  {
    id: "friday-sermons",
    title: "Friday Sermons (Khutbah)",
    description:
      "Jumu'ah Khutbah every Friday at 1:30 PM, followed by congregational prayer. Come early for the full blessing of Jumu'ah.",
    details:
      "The Khutbah begins at 1:30 PM sharp. Our imams deliver insightful khutbahs covering Islamic guidance, current affairs through an Islamic lens, and practical lessons for daily life. Jumu'ah prayer follows immediately after the two-part sermon.",
    icon: <FaMicrophone />,
  },
  {
    id: "quran-classes",
    title: "Qur'an Classes",
    description:
      "Structured Qur'an education for all ages — from beginner to advanced — covering Tajweed, Hifz, and Tafseer.",
    details:
      "Classes are available for children (ages 5–12), teens (13–18), and adults. We cover proper Tajweed recitation, Hifz (memorization) programs, and Tafseer (understanding of the meanings). Visit the Qur'an Lessons page for the full schedule or call Brother Jamal at (504) 339-0011 to register.",
    icon: <FaBookOpen />,
  },
  {
    id: "community-counseling",
    title: "Community Counseling",
    description:
      "Confidential spiritual and emotional support for individuals, couples, and families — grounded in Islamic values.",
    details:
      "Life's challenges can feel overwhelming. Our counseling services offer a compassionate, Islamic-centered space for individuals facing personal struggles, marital difficulties, family conflict, or spiritual hardship. All sessions are conducted with full confidentiality. Contact the masjid office to schedule an appointment.",
    icon: <FaComments />,
  },
  {
    id: "islamic-lectures",
    title: "Islamic Lectures",
    description:
      "Regular educational talks on Islamic history, theology, fiqh, and contemporary Muslim life.",
    details:
      "We host scholars and community educators for lectures on a wide range of topics including the life of the Prophet ﷺ, Islamic jurisprudence, purification of the heart, and navigating life as a Muslim in America. Check with the masjid for upcoming lecture schedules.",
    icon: <FaChalkboardUser />,
  },
  {
    id: "marriage-services",
    title: "Marriage Services",
    description:
      "Nikah officiation, pre-marital counseling, and guidance on building a strong Islamic marriage.",
    details:
      "We offer Nikah ceremonies conducted by our imam in accordance with Islamic law. Pre-marital counseling is strongly encouraged and available to prospective couples. Marital counseling is also available for couples seeking to strengthen or repair their relationship according to Islamic principles.",
    icon: <FaHeart />,
  },
  {
    id: "zakat-assistance",
    title: "Zakat & Charity",
    description:
      "We help you fulfill your Zakat obligation by connecting your contributions with those most in need in our community.",
    details:
      "Zakat is one of the Five Pillars of Islam. Our team ensures that Zakat funds are distributed correctly and reach eligible recipients — including the poor, those in debt, and new Muslims. We also accept Sadaqah (voluntary charity) for community programs and masjid maintenance.",
    icon: <FaHandHoldingHeart />,
  },
  {
    id: "youth-programs",
    title: "Youth Programs",
    description:
      "Engaging activities, Islamic education, and mentorship for young Muslims to grow in faith and character.",
    details:
      "Our youth programs create a welcoming space for Muslim youth to learn, connect, and develop. Programs include Islamic studies, community service projects, sports and recreational activities, and leadership development. We aim to equip young Muslims with the tools to thrive spiritually and socially.",
    icon: <FaChildren />,
  },
  {
    id: "interfaith-dialogue",
    title: "Interfaith Dialogue",
    description:
      "Building bridges of understanding between the Muslim community and our neighbors of other faiths.",
    details:
      "The Islamic Center actively participates in interfaith events across New Orleans. We welcome visits from schools, churches, and community organizations who want to learn about Islam. Our interfaith efforts promote mutual respect and dispel misconceptions about Muslim life and practice.",
    icon: <FaHandshake />,
  },
  {
    id: "funeral-services",
    title: "Funeral Services",
    description:
      "Compassionate support for Janazah prayer, Ghusl, and Islamic burial — guiding families through loss with care.",
    details:
      "We provide full Janazah services including Ghusl (ritual washing), Kafan (shrouding), Janazah prayer, and coordination with local cemeteries for Islamic burial. We also offer bereavement support for grieving families. Please contact the masjid immediately upon a loss so we can assist the family promptly.",
    icon: <FaDove />,
  },
  {
    id: "ramadan-programs",
    title: "Ramadan Programs",
    description:
      "Taraweeh prayers, community Iftars every night, Qiyam al-Layl, and special programs throughout the blessed month.",
    details:
      "Ramadan at the Islamic Center is a full community experience. We host Iftar every night open to the entire community, Taraweeh prayers after Isha, and Qiyam al-Layl (night prayers) in the last ten nights. We also organize Laylat al-Qadr vigils and an Eid celebration to close the month.",
    icon: <FaMoon />,
  },
];

const Services: React.FC = () => {
  const [openServices, setOpenServices] = useState<Set<string>>(new Set());

  const toggleService = (id: string) => {
    setOpenServices((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <p className="services-subtitle">
        Serving the New Orleans Muslim community with faith, knowledge, and compassion.
      </p>

      <nav className="services-nav" aria-label="Jump to service">
        {services.map((service) => (
          <a key={service.id} href={`#${service.id}`} className="service-nav-pill">
            {service.title}
          </a>
        ))}
      </nav>

      <div className="services-grid">
        {services.map((service) => {
          const isOpen = openServices.has(service.id);
          return (
            <div key={service.id} id={service.id} className="service-card">
              <div className="service-card-icon" aria-hidden="true">
                {service.icon}
              </div>
              <h2>{service.title}</h2>
              <p className="service-card-desc">{service.description}</p>
              <button
                className="service-card-toggle"
                onClick={() => toggleService(service.id)}
                aria-expanded={isOpen}
              >
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                {isOpen ? "Show less" : "Learn more"}
              </button>
              {isOpen && (
                <div className="service-card-details">{service.details}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
