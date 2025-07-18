 import React, { useEffect, useState } from 'react';
import './HeroSlider.css';
import slider1 from './image/slider1.jpeg';
import slider2 from './image/slider2.jpeg';
import FunFactSection from '../Section/FunFactSection';


const funFactData = [
  { number: '20+', title: 'Years of experience' },
  { number: '95%', title: 'Patient satisfaction rating' },
  { number: '5000+', title: 'Patients served annually' },
  { number: '10+', title: 'Healthcare providers on staff' },
  { number: '22+', title: 'Convenient locations in the area' },
];

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
        
                 <FunFactSection
                   bgUrl="images/about/fun_fact_bg.jpeg"
                   data={funFactData}
                 />
               
      </div>
    </div>
  );
}
