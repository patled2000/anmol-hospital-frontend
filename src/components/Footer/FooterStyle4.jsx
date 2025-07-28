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
  FaInstagram
} from 'react-icons/fa';

export default function FooterStyle4() {
  return (
    <footer className="footer">
       <div className='Footer_logo'><img src={logo} alt="Anmol Hospital Logo" /></div>
      <div className="footer-top">
         
        <div className="footer-column">
           
          <p style={{fontWeight:"600" ,fontSize:"25px",marginBottom:"26px"}}>Contact</p>
          <ul>
            <li><FaMapMarkerAlt />26 B, Kila Maidan Rd, near khade Ganesh mandir, 
            Nanda Nagar, Kamla Nehru Nagar, Indore, Madhya Pradesh 452015</li>
            <li><FaPhone />0731 3597 048</li>
            <li><FaEnvelope />anmolhospital123@gmail.com</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="footer-column" style={{paddingTop:"-3px"}}>
          <h4 style={{fontSize:"25px"}}>Explore</h4>
          <ul>
            <li><Link to="/about">About </Link></li>
            <li><Link to="/departments">Departments</Link></li>
            <li><Link to="/doctors">Doctors</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
             
            
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-column"  style={{paddingTop:"-3px"}}>
          <h4 style={{fontSize:"25px"}}>Support</h4>
          <ul>
            <li><Link to="/">Testimonials</Link></li>
           
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/">FAQs</Link></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-column"  style={{paddingTop:"-3px"}}>
          <h4 style={{fontSize:"25px"}}>Legal</h4>
          <ul>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms and Conditions</Link></li>
          </ul>
          
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
         <span style={{marginLeft:"20px"}}> © 2025 Anmol Hospital.All Rights Reserved</span>  
          <span style={{marginLeft:"885px"}}> Powered by Inkcast Innovations.</span>
          
        </p>
        
        
      </div>
    </footer>
  );
}
