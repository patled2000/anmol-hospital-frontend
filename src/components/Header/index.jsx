 import React, { useState } from 'react';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from './Anmol_Hospital_Logo_Hz_Color@150x-100.jpg';
import AppointmentForm from './AppointmentForm';
import './TopHeader.css';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Top Header */}
      <div className="top-header">
        <div className="top-header-container">
          <div className="contact-box">24/7 Support</div>
          <div className="info-item"><FaPhone className="icon" />1800 233 0239</div>
          <div className="info-item"><FaMapMarkerAlt className="icon" />Annapurna Road, Indore</div>
          <div className="info-item"><FaEnvelope className="icon" />info@anmolehospital.com</div>
        </div>
      </div>

      {/* Main Header */}
      <header className="main-header">
        <div className="main-header-container">
          <div className="logo">
            <Link to="/"><img src={logo} alt="Anmol Hospital" /></Link>
          </div>

          {/* Hamburger icon (mobile only) */}
          <div className="hamburger" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>

          {/* Navigation Links */}
          <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/doctors">Find Doctor</Link>
            <Link to="/departments">Departments</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
            <div className="appointment-btn">
              <button onClick={() => setIsAppointmentOpen(true)}>Appointment</button>
            </div>
          </nav>
        </div>
      </header>

      {/* Appointment Form SideNav with Overlay Fix */}
      {isAppointmentOpen && (
        <div
          className="overlay"
          onClick={() => setIsAppointmentOpen(false)}
        >
          <div
            className="appointment-sidenav open"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sidenav-content">
              <button className="close-btn" onClick={() => setIsAppointmentOpen(false)}>✕</button>
              <h3>Book Appointment</h3>
              <AppointmentForm />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
