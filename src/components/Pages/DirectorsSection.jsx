import React from 'react';
import './DirectorsSection.css';
import director1 from './image/shivam.jpeg';
import director2 from './image/jitendar.png';

export default function DirectorsSection() {
  return (
    <section className="directors-section">
      <h2 className="section-title ">Our Founders</h2>
      <div className="directors-container">
        <div className="director-card">
          <img src={director1} alt="Director 1" />
          <div className="overlay">
            <h3>Dr. Firstname Lastname</h3>
            <p>Founder & Managing Director</p>
          </div>
        </div>
        <div className="director-card">
          <img src={director2} alt="Director 2" />
          <div className="overlay">
            <h3>Dr. Firstname Lastname</h3>
            <p>Co-Founder & Medical Director</p>
          </div>
        </div>
      </div>
    </section>
  );
}
