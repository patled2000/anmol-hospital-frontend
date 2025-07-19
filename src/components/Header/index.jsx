  import React, { useState } from 'react';
import { FaPhone, FaMapMarkerAlt, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from './Anmol_Hospital_Logo_Hz_Color@150x-100.jpg';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
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
        <a
  href="https://maps.app.goo.gl/ArTGh7anxVCYdXbr5"
  
  rel="noopener noreferrer"
  className="info-item"
  style={{ display: 'flex', alignItems: 'center', color: 'inherit', textDecoration: 'none' }}
>
  <FaMapMarkerAlt className="icon" />
  Kamla Nehru Nagar, Indore
</a>


 

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
      {/**   <Link to='/appointment' ></Link> <div className="appointment-btn">
              <button onClick={openAppointment}>Appointment</button>
            </div>    <Link />   */} 
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
