 import React, { useEffect, useState } from 'react';
import './HeroSlider.css';
import slider1 from './image/slider1.jpeg';
import slider2 from './image/slider2.jpeg';
import FunFactSection from '../Section/FunFactSection';
import image1 from './image/24281.jpg'


const funFactData = [
  { number: '6+', title: 'Years of Experience' },
  { number: '95%', title: 'Patient Satisfaction' },
  { number: '5K+', title: 'Patients Served Annually' },
  { number: '10+', title: 'Healthcare Providers on Staff' },
  
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
                    bgUrl={image1} 
                   data={funFactData}
                 />
               
      </div>
    </div>
  );
}
