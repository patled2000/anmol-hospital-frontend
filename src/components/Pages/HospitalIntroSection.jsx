import React from 'react';
import './HospitalIntroSection.css';
import img1 from './image/MRI Scan.jpg';
import img2 from './image/Lab Work.jpg';
import img3 from './image/Microscope.jpg';
import img4 from './image/ICU Unit.jpg';
import { Link } from 'react-router-dom';


export default function HospitalIntroSection() {
  return (
    <section className="hospital-intro">
      <div className="intro-left">
        <h2>Anmol Hospital & Research Center</h2>
        <p>
          <strong>Anmol Hospital</strong> is one of the most trusted names in healthcare across Central India. With a legacy of compassion and excellence, we offer <span className="highlight">multi-specialty treatments</span> and <span className="highlight">cutting-edge diagnostics</span> under one roof.
        </p>
        <p>
          Our mission is to bring world-class healthcare to every individual — blending <span className="highlight-green">advanced medical science</span> with <span className="highlight-green">personalized human care</span>. Trusted by thousands, we stand as a symbol of quality and hope.
        </p>
        <p className="sanskrit">
          "Sarvetra Sukhinah Santu, Sarve Santu Niramayah" – May all be happy, may all be healthy.
        </p>
        <p className="tagline">“Anmol Hospital – Where Care Meets Excellence.”</p>
      </div>

      <div className="intro-right">
        <div className="img-grid"> 
      <Link to="/gallery">   <img src={img1} alt="MRI Scan" /></Link> 
      <Link to="/gallery">     <img src={img2} alt="Lab work" /></Link>
        <Link to="/gallery">   <img src={img3} alt="Microscope" /></Link>
        <Link to="/gallery">   <img src={img4} alt="ICU Unit" /> </Link>
        </div>
      </div>
    </section>
  );
}
