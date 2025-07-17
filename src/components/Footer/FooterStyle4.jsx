 import React from 'react';
import { Link } from 'react-router-dom';
import './FooterSection.css';
import logo from './Anmol_Hospital_Logo_Hz_White@150x.png';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function FooterStyle4() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={logo} alt="Anmol Hospital Logo" />
          <p>Your care in our hand</p>
          <ul>
            <li><FaMapMarkerAlt /> 123 Anywhere St., Any City 12345</li>
            <li><FaPhone /> 123-456-7890</li>
            <li><FaEnvelope /> hellocallcenter@gmail.com</li>
          </ul>
        </div>

        <div className="footer-links">
          <div>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/departments">Departments</Link></li>
              <li><Link to="/doctors">Doctors</Link></li>
              <li><Link to="/timetable">Timetable</Link></li>
              <li><Link to="/appointment">Appointment</Link></li>
            </ul>
          </div>
          <div>
            <ul>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/faqs">FAQs</Link></li>
            </ul>
          </div>
          <div>
            <ul>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms and Conditions</Link></li>
            </ul>
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Copyright © 2025 <strong>Anmol Hospital</strong>.
          Designed & Developed by <strong>Inkcast innovations.</strong>
        </p>
      </div>
    </footer>
  );
}
