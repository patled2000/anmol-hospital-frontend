 import React from 'react';
import './DirectorsSection.css';
import director1 from './About_page_image/shivam.webp';
import director2 from './About_page_image/jitendar.webp';

export default function DirectorsSection() {
  return (
    <section className="directors-section">
      <h2 className="section-title">Our Founders</h2>

      <p className="founder-intro">
        Meet the visionaries behind Anmol Hospital —
        <strong> Dr. Shivam Mishra (BHMS, CMSED)</strong> and
        <strong> Dr. Jitendra Awasthi (BHMS, PGDEMS, MHA)</strong>.
      </p>

      <p className="founder-intro">
        With a mission to provide ethical, affordable, and people-first healthcare,
        they have built Anmol Hospital as a place where care meets commitment.
      </p>

      <div className="directors-container">
        <div className="director-card">
          <img src={director1} alt="Dr. Shivam Mishra" />
          <div className="overlay">
            <h3 style={{color:"white"}}>Dr. Shivam Mishra</h3>
            <p>
              Co-Founder & Medical Director <br />
              BHMS, CMSED
            </p>
          </div>
        </div>

        <div className="director-card">
          <img src={director2} alt="Dr. Jitendra Awasthi" />
          <div className="overlay">
            <h3 style={{color:"white"}}>Dr. Jitendra Awasthi</h3>
            <p>
              Founder & Managing Director <br />
              BHMS, PGDEMS, MHA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
