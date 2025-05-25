import React from 'react';
import '../../Style/AboutSection.css';
import leftImage from '../../Image/about-img-1.jpg'; 
import rightImage from '../../Image/about-img-2.jpg'; 
import userImage from '../../Image/about-img-3.jpg'; 
import logo from '../../Image/subtitle-icon.png'; // Add your logo image path

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        {/* Left Image Section */}
        <div className="left-section">
          <div className="image-wrapper">
            <img src={leftImage} alt="Repair Team" className="left-image" />
            <img src={rightImage} alt="Repair Team 2" className="right-image" />
          </div>
          <div className="stats-box">
            <h2>200+</h2>
            <p>Project Done</p>
          </div>
        </div>

        {/* Right Content Section */}
        <div className="right-section">
          <div className="subtitle-wrapper">
            <img src={logo} alt="Company Logo" className="logo" />
            <p className="subtitle">About company</p>
          </div>
          <h2 className="title">We are most popular repair company</h2>
          <p className="description">
            Duis nunc sodales conubia ad laoreet aliquet nostra. Eleifend lacinia praesent hendrerit 
            quisque penatibus erat. At pulvinar integer semper ridiculus lectus condimentum obor 
            tise verodar capmtaso morin proin nibh posuere.
          </p>

          <div className="quote-box">
            <p>Don’t feel heat when there is best air conditioning seat</p>
          </div>

          <div className="user-info">
            <button className="read-more-btn">Read More</button>
            <div className="user-details">
              <img src={userImage} alt="User" className="user-avatar" />
              <div>
                <p className="user-name">Lynda Jessica</p>
                <p className="user-title">CEO - Airvice</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
