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
  const openAppointment = () => setIsAppointmentOpen(true);
  const closeAppointment = () => setIsAppointmentOpen(false);

  return (
    <>
      {/* Top Header */}
      <div className="top-header">
        <div className="top-header-container">
          <div className="contact-box">24/7 Support</div>
          <div className="info-item"><FaPhone className="icon" />0731 3594 048</div>
          <div className="info-item">
  <FaMapMarkerAlt className="icon" />
  <a
    href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.745687114546!2d75.8433838744598!3d22.737691979374503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963036d21badf7d%3A0x48fda517ec42ad42!2sAnmol%20Hospital!5e0!3m2!1sen!2sin!4v1752658261945!5m2!1sen!2sin"
    target="_blank"
    rel="noopener noreferrer"
  >
    Kamla Nehru Nagar, Indore
  </a>
</div>

<div className="info-item">
  <FaEnvelope className="icon" />
  <a href="mailto:anmolhospital123@gmail.com">anmolhospital123@gmail.com</a>
</div>

        </div>
      </div>

      {/* Main Header */}
      <header className="main-header">
        <div className="main-header-container">
          <div className="logo">
            <Link to="/"><img src={logo} alt="Anmol Hospital" /></Link>
          </div>

          <div className="hamburger" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>

          <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/doctors">Find Doctor</Link>
            <Link to="/departments">Departments</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
            <div className="appointment-btn">
              <button onClick={openAppointment}>Appointment</button>
            </div>
          </nav>
        </div>
      </header>

      {/* Sidebar Overlay */}
      {isAppointmentOpen && (
        <div className="overlay" onClick={closeAppointment}>
          <div className="appointment-sidenav open" onClick={(e) => e.stopPropagation()}>
            <div className="sidenav-content">
              <button className="close-btn" onClick={closeAppointment}>✕</button>
              <h3>Book Appointment</h3>
              <AppointmentForm />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

