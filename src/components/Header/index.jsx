 import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AppointmentForm from './AppointmentForm';
import Spacing from '../Spacing';
import './Header.css'; // ✅ Make sure to write matching CSS
import anmol_hospital from './Anmol_Hospital_Logo_Hz_Color@150x-100.jpg'
 
import {
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  
} from 'react-icons/fa';
import './TopHeader.css';

export default function Header({ logoSrc, variant }) {
  const [isSticky, setIsSticky] = useState(false);
  const [sideNav, setSideNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    
       {/* Top Header OUTSIDE the sticky main header */}
        <div className="top-header">
    <div className="top-header-container">
      <div className="top-header-left">
        <div className="contact-box">24/7 Support</div>

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
    </div>
  </div>

         {/* Sticky Main Header */}
  <header className={`cs_site_header cs_style1 ${isSticky ? 'cs_active_sticky' : ''} ${variant}`}>
    <div className="container">
      <div className="cs_header_row">
        <div className="cs_logo">
          <Link to="/">
            <img
              src={anmol_hospital}
              alt="Anmol Hospital logo"
              style={{ height: '50px', width: 'auto' }}
            />
          </Link>
        </div>

        <nav className="cs_nav">
          <ul className="cs_nav_list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/doctors">Find Doctor</Link></li>
            <li><Link to="/departments">Departments</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <div className="cs_appointment_btn">
          <button onClick={() => setSideNav(true)}>Appointment</button>
        </div>
      </div>
    </div>
  </header>


      {/*  SideNav Appointment Panel */}
      <div className={`cs_sidenav ${sideNav ? 'active' : ''}`}>
        <div className="cs_sidenav_overlay" onClick={() => setSideNav(false)} />
        <div className="cs_sidenav_in">
          <button className="cs_close" onClick={() => setSideNav(false)}>
            <img src="/images/icons/close.svg" alt="Close" />
          </button>
          <div className="cs_logo_box">
            <img src="/images/logo.svg" alt="Logo" />
            <Spacing md="20" lg="20" xl="20" />
            <h3 className="cs_fs_24 cs_semibold mb-0">Book Appointment</h3>
          </div>
          <Spacing md="30" lg="30" xl="30" />
          <div className="cs_appointment_form_wrapper">
            <AppointmentForm />
          </div>
        </div>
      </div>
    </>
  );
}
