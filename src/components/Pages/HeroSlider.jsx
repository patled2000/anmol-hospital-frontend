 import React, { useEffect, useState } from 'react';
import './HeroSlider.css';
import anmolimg from './image/slider1.jpeg';
import anmolimg1 from './image/slider2.jpeg';

const slides = [
  { image: anmolimg1 },
  { image: anmolimg }
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
    <div className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        ></div>
      ))}
    </div>
  );
}
