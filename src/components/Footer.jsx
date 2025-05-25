import React from "react";
 import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
 import { FaLocationDot, FaPhone, FaEnvelope, FaClock } from "react-icons/fa6";
import bhumu from "../images/Bhumulogo.png"
import "../../"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-about">
          <div className="footer-logo">
            <img src={ bhumu}alt="BHUMU Logo" />
          </div>
          <p>
            BHUMU is dedicated to providing high-quality services with a strong focus on innovation and client satisfaction.
          </p>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaWhatsapp /></a>
          </div>
        </div>

        {/* Middle Section - Company Links */}
        <div className="footer-links">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Our Blog</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Forum Community</a></li>
            <li><a href="#">Business Support</a></li>
            <li><a href="#">Payment Gateway</a></li>
            <li><a href="#">Web Development</a></li>
          </ul>
        </div>

        {/* Right Section - Contact Details */}
        <div className="footer-contact">
          <h3>Get In Touch</h3>
          <ul>
            <li><FaLocationDot /> 210, 2nd Floor, Ocean Plaza, Sector 18, Noida - 201301
            </li>
            <li><FaPhone />6202000340</li>
            <li><FaEnvelope /> support@bhumu.com</li>
            <li><FaClock /> 09:00 AM - 05:00 PM (Mon-Sat)</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>Copyright © 2025 <span className="highlight">BHUMU</span>. All Rights Reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
