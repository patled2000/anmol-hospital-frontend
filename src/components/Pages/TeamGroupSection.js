import React from 'react';
import './TeamGroupSection.css';
import teamGroupImage from './Home_page_image/group_team.webp'; 

export default function TeamGroupSection() {
  return (
    <section className="team-group-section">
      <div className="team-group-content">
        <h2> Meet our team of Medical Experts </h2>
        <p>
          Our dedicated team of highly skilled doctors, surgeons, and healthcare professionals
          work collaboratively to deliver excellence in medical care. At Anmol Hospital,
          compassion meets expertise to create a healing environment for every patient.
        </p>
      </div>
      <div className="team-group-image">
        <img src={teamGroupImage} alt="Anmol Hospital Team" />
      </div>
    </section>
  );
}
