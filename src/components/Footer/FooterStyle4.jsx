 import React from 'react';
import { Link } from 'react-router-dom';
import './FooterSection.css';
import logo from './Anmol_Hospital_Logo_Hz_White@150x.png';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';

export default function FooterStyle4() {
  return (
    <footer className="footer">
      <div className="Footer_logo">
        <img src={logo} alt="Anmol Hospital Logo" />
      </div>

      <div className="footer-top">
        {/* Contact Column */}
        <div className="footer-column">
          <p style={{ fontWeight: '600', fontSize: '25px', marginBottom: '26px' }}>Contact</p>
          <ul>
            <li>
              <FaMapMarkerAlt /> 26 B, Kila Maidan Rd, near Khade Ganesh Mandir,
              Nanda Nagar, Kamla Nehru Nagar, Indore, Madhya Pradesh 452015
            </li>
            <li><FaPhone /> 0731 3597 048</li>
            <li><FaEnvelope /> anmolhospital123@gmail.com</li>
          </ul>
        </div>

        {/* Explore Column */}
        <div className="footer-column">
          <h4 style={{ fontSize: '25px' }}>Explore</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/departments">Departments</Link></li>
            <li><Link to="/doctors">Our Doctors</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
          </ul>
        </div>

        {/* Support Column */}
        <div className="footer-column">
          <h4 style={{ fontSize: '25px' }}>Support</h4>
          <ul>
            <li><Link to="/">Testimonials</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/">FAQs</Link></li>
          </ul>
        </div>

        {/* Legal Column */}
        <div className="footer-column">
          <h4 style={{ fontSize: '25px' }}>Legal</h4>
          <ul>
            <li><Link to="/PrivacyPolicy">Privacy Policy</Link></li>
            <li><Link to="/TermsAndConditions">Terms and Conditions</Link></li>
          </ul>

          <div className="social-icons">
            <a href="https://www.facebook.com/share/1GZZgfpujS/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.linkedin.com/in/dr-shivam-mishra-a6a404105/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.instagram.com/anmol.hospital1/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          <span style={{ marginLeft: '20px' }}>© 2025 Anmol Hospital. All Rights Reserved</span>
          <a
            href="https://www.inkcast.co.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="powered-by"
            style={{ marginLeft: 'auto', float: 'right', marginRight: '20px' }}
          >
            Powered by Inkcast Innovations.
          </a>
        </p>
      </div>
    </footer>
  );
}
