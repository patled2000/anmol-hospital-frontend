 import React, { useEffect, useState } from 'react';
import './HeroSlider.css';
import slider1 from './image/slider1.jpeg';
import slider2 from './image/slider2.jpeg';

const slides = [
  { image: slider1 },
  { image: slider2 }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-slider-wrapper">
      {/* ✅ Hero Slider */}
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === current ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          ></div>
        ))}
      </div>

      {/* ✅ Stats Box */}
      <div className="hero-stats-box">
        <div className="stats-row">
          <div className="stat-item"><strong>20+</strong><span>Years of experience</span></div>
          <div className="stat-item"><strong>95%</strong><span>Patient satisfaction</span></div>
          <div className="stat-item"><strong>5000+</strong><span>Patients served annually</span></div>
          <div className="stat-item"><strong>10+</strong><span>Healthcare providers</span></div>
          <div className="stat-item"><strong>22+</strong><span>Locations in area</span></div>
        </div>
      </div>
    </div>
  );
}
