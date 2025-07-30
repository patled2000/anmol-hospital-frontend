 import React from 'react';
import './FounderMessage.css';
import founder1 from './About_page_image/jitendar.webp';
import founder2 from './About_page_image/shivam.webp';

export default function FounderMessage() {
  return (
    <section className="founder-section">
      <div className="container">
        <h2 className="section-title">Message from the Founders</h2>

        <div className="founder-block">
          <div className="founder-image">
            <img src={founder1} alt="Dr. Jitendra Awasthi" />
          </div>
          <div className="founder-content">
            <p>
              At the heart of our hospital lies a commitment to compassionate care and clinical excellence. Since founding the hospital in 2019, our vision has been to create a healthcare institution where every patient feels heard, respected, and treated with the utmost dedication.
            </p>
            <p>
              We believe that quality medical care should be accessible, ethical, and delivered with integrity. With a strong team of skilled professionals and a patient-first approach, we continue to expand our services and upgrade our facilities to meet evolving healthcare needs.
            </p>
            <p className="founder-name">— Dr. Jitendra Awasthi</p>
          </div>
        </div>

        <div className="founder-block reverse">
          <div className="founder-image">
            <img src={founder2} alt="Dr. Shivam Mishra" />
          </div>
          <div className="founder-content">
            <p>
              We thank our patients, staff, and community for their unwavering trust. Your health and well-being will always remain our highest priority. Together, we aim to redefine healthcare with compassion and technology.
            </p>
            <p className="founder-name">— Dr. Shivam Mishra</p>
          </div>
        </div>
      </div>
    </section>
  );
}
