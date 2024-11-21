import React from "react";
import "../styles/QuranLessons.css"; // Custom styles for Qur'an lessons page
import styled from "styled-components";

const WhiteBox = styled.div`
  padding: 25px;
  border: 1px solid #e0e0e0;
  background-color: #ffffff;
  border-radius: 6px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px; /* Adds spacing between boxes */
  transition: transform 0.2s;


`;

const QuranLessons: React.FC = () => {
  return (
    <div className="quran-lessons-page">
        <WhiteBox>
      <h1>Qur'an Lessons at the Islamic Center</h1>
      <p>
        We offer a range of Qur'an lessons for all age groups, focusing on:
      </p>
      <ul>
        <li><strong>Tajweed:</strong> Learn to recite the Qur'an with proper pronunciation and rhythm.</li>
        <li><strong>Memorization (Hifz):</strong> Commit the words of Allah to memory with our structured programs.</li>
        <li><strong>Understanding (Tafseer):</strong> Gain deeper insights into the meanings of the verses.</li>
      </ul>
      <h2>Class Details</h2>
      <table className="quran-classes-schedule">
        <thead>
          <tr>
            <th>Age Group</th>
            <th>Days</th>
            <th>Time</th>
            <th>Instructor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Children (5-12 years)</td>
            <td>Mon, Wed, Fri</td>
            <td>TBA</td>
            <td>TBA</td>
          </tr>
          <tr>
            <td>Teens (13-18 years)</td>
            <td>Tue, Thu</td>
            <td>TBA</td>
            <td>TBA</td>
          </tr>
          <tr>
            <td>Adults</td>
            <td>Sat, Sun</td>
            <td>TBA</td>
            <td>TBA</td>
          </tr>
        </tbody>
      </table>
      <h2>Registration</h2>
      <p>
        To register for Qur'an classes, please visit our Islamic Center.
      </p>
      <h2>Contact</h2>
      <p>For more information, call Brother Jamal at (504) 339-0011.</p>
      </WhiteBox>
    </div>
  );
};

export default QuranLessons;
