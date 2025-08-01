 import React, { useState, useEffect, useRef } from 'react';
import './Specialties.css';

import General_surgery from './Department/General Surgery.webp';
import Obstetrics_and_gynaecology from './Department/Obstetrics and Gynaecology (1).webp';
import Medical_management from './Department/Medical Management.webp';
import Trauma from './Department/Untitled design (18).webp';
import Burn from './Department/Burn.webp';
import Urology from './Department/Urology.webp';
import Cardiology from './Department/Cardiology (1).webp';
import Paediatric_care from './Department/Paediatric Care (1).webp';

const specialties = [
  {
    image: General_surgery,
    title: 'जनरल सर्जरी',
    desc: 'अनमोल अस्पताल में, हमारी जनरल सर्जरी यूनिट आधुनिक तकनीकों और उन्नत उपकरणों का उपयोग करके विभिन्न प्रकार की सर्जिकल प्रक्रियाओं को करने में माहिर है। छोटी प्रक्रियाओं से लेकर जटिल ऑपरेशनों तक, हमारे विशेषज्ञ सर्जन व्यक्तिगत पोस्ट-ऑपरेटिव देखभाल के साथ सुरक्षित और सफल परिणाम सुनिश्चित करते हैं।',
  },
  {
    image: Obstetrics_and_gynaecology,
    title: 'स्त्री रोग और प्रसव विज्ञान',
    desc: 'अनमोल हॉस्पिटल महिलाओं को प्रसवपूर्व देखभाल, सुरक्षित प्रसव, रजोनिवृत्ति प्रबंधन और स्त्री रोग संबंधी उपचार सहित संपूर्ण स्वास्थ्य सेवाएँ प्रदान करता है। हमारी देखभाल करने वाली टीम महिलाओं की यात्रा के हर चरण में आराम और गोपनीयता सुनिश्चित करती है।',
  },
  {
    image: Medical_management,
    title: 'चिकित्सा प्रबंधन',
    desc: 'अनमोल अस्पताल में, हमारे आंतरिक चिकित्सा विशेषज्ञ मधुमेह, उच्च रक्तचाप और संक्रमण जैसी पुरानी और गंभीर दोनों तरह की बीमारियों के लिए व्यापक देखभाल प्रदान करते हैं। हम निरंतर निगरानी, व्यक्तिगत दवा योजना और प्रत्येक रोगी के लिए अनुकूलित जीवनशैली मार्गदर्शन प्रदान करते हैं।',
  },
  {
    image: Trauma,
    title: 'प्रसव एवं आपातकालीन चिकित्सा',
    desc: 'अनमोल अस्पताल का 24/7 ट्रॉमा और आपातकालीन विभाग त्वरित प्रतिक्रिया टीमों, जीवन रक्षक उपकरणों और आईसीयू सहायता से सुसज्जित है, ताकि सभी प्रकार की दुर्घटनाओं, गंभीर चोटों और चिकित्सा आपात स्थितियों को गति और सटीकता के साथ संभाला जा सके।',
  },
  {
    image: Burn,
    title: 'जलने की देखभाल',
    desc: 'हमारी बर्न केयर यूनिट सभी प्रकार के जलने के लिए विशेष उपचार प्रदान करती है। अनमोल अस्पताल में, हम घाव को तेज़ी से भरने और निशानों को कम करने के लिए उन्नत घाव देखभाल, त्वचा प्रत्यारोपण और दर्द प्रबंधन रणनीतियों का उपयोग करते हैं।',
  },
  {
    image: Urology,
    title: 'मूत्रविज्ञान',
    desc: 'अनमोल अस्पताल का यूरोलॉजी विभाग गुर्दे की पथरी, प्रोस्टेट की समस्याओं, मूत्राशय की समस्याओं आदि के लिए विशेषज्ञ निदान और उपचार प्रदान करता है। हमारी टीम शीघ्र स्वास्थ्य लाभ के लिए नवीनतम न्यूनतम इनवेसिव तकनीकों का उपयोग करती है।',
  },
  {
    image: Cardiology,
    title: 'कार्डियोलोजी',
    desc: 'अनमोल अस्पताल की कार्डियोलॉजी टीम ईसीजी, 2डी इको और हृदय संबंधी जोखिम आकलन सहित संपूर्ण हृदय देखभाल प्रदान करती है। हमारे विशेषज्ञ स्वस्थ हृदय के लिए व्यक्तिगत उपचार योजनाएँ और निवारक रणनीतियाँ बनाते हैं।',
  },
  {
    image: Paediatric_care,
    title: 'बाल चिकित्सा देखभाल',
    desc: 'अनमोल हॉस्पिटल में, हम नवजात शिशुओं, शिशुओं और बच्चों की देखभाल के लिए समर्पित हैं। टीकाकरण से लेकर उनके विकास की निगरानी और बच्चों की विशिष्ट बीमारियों तक, हमारे बाल रोग विशेषज्ञ आपके नन्हे-मुन्नों के लिए एक स्वस्थ शुरुआत सुनिश्चित करते हैं।',
  },
];

export default function SpecialtySlider() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);
  const sliderRef = useRef(null);

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % specialties.length);
    }, 5000); // 3 seconds
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
