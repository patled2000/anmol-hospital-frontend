import React from 'react';
import './FacilitiesSection.css';
import { FaAmbulance, FaMicroscope, FaUserMd, FaStethoscope, FaHeartbeat, FaHospital } from 'react-icons/fa';

const facilities = [
  {
    icon: <FaAmbulance />,
    title: "24/7 Emergency",
    description: "Quick response ambulance and emergency team always available.",
  },
  {
    icon: <FaMicroscope />,
    title: "Advanced Lab",
    description: "Fully automated lab with modern diagnostic equipment.",
  },
  {
    icon: <FaUserMd />,
    title: "Expert Doctors",
    description: "Experienced specialists across all major departments.",
  },
  {
    icon: <FaStethoscope />,
    title: "OPD Services",
    description: "Regular outpatient consultations available all weekdays.",
  },
  {
    icon: <FaHeartbeat />,
    title: "Cardiac Care",
    description: "State-of-the-art cardiac monitoring and treatment.",
  },
  {
    icon: <FaHospital />,
    title: "Inpatient Rooms",
    description: "Clean and comfortable rooms with 24-hour nursing staff.",
  },

   {
    icon: <FaUserMd />,
    title: "Physiotherapy Unit",
    description: "Helping patients recover with guided physical therapy.",
  },
  
  {
    icon: <FaMicroscope />,
    title: "Radiology Services",
    description: "Digital X-ray, Ultrasound, and other imaging solutions.",
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
            <h3>{facility.title}</h3>
            <p>{facility.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
