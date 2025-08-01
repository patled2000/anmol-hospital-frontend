 import React from 'react';
import './FacilitiesSection.css';
import {
  FaAmbulance,
  FaMicroscope,
  FaUserMd,
  FaStethoscope,
  FaHeartbeat,
  FaHospital
} from 'react-icons/fa';

const facilities = [
  {
    icon: <FaAmbulance />,
    hindiTitle: "24/7 आपातकाल",
    
    description: "त्वरित प्रतिक्रिया एम्बुलेंस और आपातकालीन टीम हमेशा उपलब्ध रहती है।",
  },
  {
    icon: <FaMicroscope />,
    hindiTitle: "उन्नत प्रयोगशाला",
    
    description: "आधुनिक नैदानिक उपकरणों से सुसज्जित पूर्णतः स्वचालित प्रयोगशाला।",
  },
  {
    icon: <FaUserMd />,
    hindiTitle: "विशेषज्ञ डॉक्टर",
     
    description: "सभी प्रमुख विभागों में अनुभवी विशेषज्ञ।",
  },
  {
    icon: <FaStethoscope />,
    hindiTitle: "बाह्य रोगी विभाग",
   
    description: "सभी कार्यदिवसों पर नियमित बाह्य रोगी परामर्श उपलब्ध है।",
  },
  {
    icon: <FaHeartbeat />,
    hindiTitle: "हृदय देखभाल",
    
    description: "अत्याधुनिक हृदय निगरानी और उपचार।",
  },
  {
    icon: <FaHospital />,
    hindiTitle: "अस्पताल में भर्ती मरीज",
  
    description: "24 घंटे नर्सिंग स्टाफ के साथ स्वच्छ और आरामदायक कमरे।",
  },
  {
    icon: <FaUserMd />,
    hindiTitle: "भौतिक चिकित्सा",
    
    description: "निर्देशित भौतिक चिकित्सा के साथ रोगियों को ठीक होने में मदद करना।",
  },
  {
    icon: <FaMicroscope />,
    hindiTitle: "विकिरण चिकित्सा विज्ञान",
    
    description: "डिजिटल एक्स-रे, अल्ट्रासाउंड और अन्य इमेजिंग समाधान।",
  },
];

export default function FacilitiesSection() {
  return (
    <section className="facility-section">
      <div className="facility-heading">
        <h2>Our Facilities</h2>
        <p>Delivering excellence in healthcare <br /> with world-class infrastructure</p>
      </div>
      <div className="facility-grid">
        {facilities.map((facility, index) => (
          <div className="facility-box" key={index}>
            <div className="facility-icon">{facility.icon}</div>
            <h3 className="facility-title-hindi">{facility.hindiTitle}</h3>
            <p className="facility-title-eng">{facility.engTitle}</p>
            <p>{facility.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
