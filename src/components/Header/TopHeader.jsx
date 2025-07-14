import React from 'react';
import {
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import './TopHeader.css';

export default function TopHeader() {
  return (
    <div className="top-header">
      <div className="top-header-container">
        {/* Left side */}
        <div className="top-header-left">
          <div className="contact-box">24/7 Contacts</div>

          <div className="info-item">
            <FaPhone className="icon" />
            <span>Toll Free Number: 1800 233 0239</span>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <span>Location: Annapurna Road, Indore</span>
          </div>

          <div className="info-item">
            <FaEnvelope className="icon" />
            <span>info@anmolehospital.com</span>
          </div>
        </div>

        {/* Right side */}
        <div className="top-header-right">
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaFacebookF /></a>
        </div>
      </div>
    </div>
  );
}
