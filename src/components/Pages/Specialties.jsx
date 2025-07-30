 import React, { useState, useEffect, useRef } from 'react';
import './Specialties.css';

import General_surgery from './Department/General Surgery.jpg';
import Obstetrics_and_gynaecology from './Department/Obstetrics and Gynaecology (1).png';
import Medical_management from './Department/Medical Management.jpg';
import Trauma from './Department/Untitled design (18).png';
import Burn from './Department/Burn.png';
import Urology from './Department/Urology.png';
import Cardiology from './Department/Cardiology (1).png';
import Paediatric_care from './Department/Paediatric Care (1).png';

const specialties = [
  {
    image: General_surgery,
    title: 'General Surgery',
    desc: 'At Anmol Hospital, our General Surgery unit specializes in performing a wide range of surgical procedures using modern techniques and advanced tools. From minor procedures to complex operations, our expert surgeons ensure safe, successful outcomes with personalized post-operative care.',
  },
  {
    image: Obstetrics_and_gynaecology,
    title: 'Obstetrics & Gynaecology',
    desc: 'Anmol Hospital provides complete women’s health services including prenatal care, safe deliveries, menopause management, and gynecological treatments. Our caring team ensures comfort and privacy at every stage of a woman’s journey.',
  },
  {
    image: Medical_management,
    title: 'Medical Management',
    desc: ' At Anmol Hospital, our Internal Medicine specialists provide comprehensive care for both chronic and acute conditions such as diabetes, hypertension, and infections. We offer continuous monitoring, personalized medication planning, and lifestyle guidance tailored to each patient.',
  },
  {
    image: Trauma,
    title: 'Trauma & Emergency',
    desc: 'Anmol Hospital’s 24/7 Trauma & Emergency department is equipped with rapid response teams, life-saving equipment, and ICU support to handle all types of accidents, critical injuries, and medical emergencies with speed and precision.',
  },
  {
    image: Burn,
    title: 'Burn Care',
    desc: 'Our Burn Care Unit provides specialized treatment for all degrees of burns. At Anmol Hospital, we use advanced wound care, skin grafting, and pain management strategies to promote fast healing and minimize scarring.',
  },
  {
    image: Urology,
    title: 'Urology',
    desc: 'The Urology department at Anmol Hospital offers expert diagnosis and treatment for kidney stones, prostate issues, bladder conditions, and more. Our team uses the latest minimally invasive techniques for faster recovery.',
  },
  {
    image: Cardiology,
    title: 'Cardiology',
    desc: 'Anmol Hospital’s Cardiology team provides complete heart care including ECG, 2D Echo, and cardiac risk assessments. Our specialists create personalized treatment plans and preventive strategies for a healthy heart.',
  },
  {
    image: Paediatric_care,
    title: 'Paediatric Care',
    desc: 'At Anmol Hospital, we provide compassionate care for newborns, infants, and children. From vaccinations to growth monitoring and child-specific ailments, our pediatricians ensure a healthy start for your little ones.',
  },
];

export default function SpecialtySlider() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);
  const sliderRef = useRef(null);

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % specialties.length);
    }, 3000); // 3 seconds
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay(); // cleanup on unmount
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % specialties.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + specialties.length) % specialties.length);
  };

  return (
    <>
      <div className="specialty-header">
        <h2><span>Specialized Care at Anmol Hospital</span></h2>
        <p >
           Explore the expert departments at Anmol Hospital, <br />
       led by trusted and compassionate professionals.

          
        </p>
      </div>

      {/* Slider Section */}
      <div
        className="specialty-slider-box"
        ref={sliderRef}
        onMouseEnter={stopAutoPlay}
        onMouseLeave={startAutoPlay}
        onTouchStart={stopAutoPlay}
        onTouchEnd={startAutoPlay}
      >
        <button className="arrow-btn left" onClick={prevSlide}>‹</button>
        <div className="specialty-left">
          <img src={specialties[current].image} alt={specialties[current].title} />
        </div>
        <div className="specialty-right">
          <h2>{specialties[current].title}</h2>
          <p>{specialties[current].desc}</p>
          <div className="dot-navigation">
            {specialties.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === current ? 'active' : ''}`}
                onClick={() => setCurrent(index)}
              ></span>
            ))}
          </div>
        </div>
        <button className="arrow-btn right" onClick={nextSlide}>›</button>
      </div>
    </>
  );
}
