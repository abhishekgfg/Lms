import React from "react";
import { FaTools, FaFan, FaBroom, FaThermometerThreeQuarters } from "react-icons/fa";
import "../../Style/RepairServices.css";
import service from "../../Image/service-img.jpg";
import logo from "../../Image/subtitle-icon.png"; // Import your logo image

const services = [
  { title: "Quality Testing", type: "Commercial", icon: <FaTools />, highlight: false },
  { title: "AC Installation", type: "Commercial", icon: <FaFan />, highlight: true },
  { title: "Dust Cleaning", type: "Commercial", icon: <FaBroom />, highlight: false },
  { title: "Heating Service", type: "Commercial", icon: <FaThermometerThreeQuarters />, highlight: false },
];

const RepairServices = () => {
  return (
    <div className="repair-services">
      <div className="header">
        <div className="header-text">
          <div className="subtitle-wrapper">
            <img src={logo} alt="Logo" className="logo" /> {/* Logo added here */}
            <p className="subtitle">Featured Services</p>
          </div>
          <h2 className="title">Popular repair service</h2>
        </div>
        <button className="more-service-button">More Service</button>
      </div>

      <div className="content">
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card ${service.highlight ? "highlight-card" : ""}`}
            >
              <div className="service-icon">{service.icon}</div>
              <p className="service-type">{service.type}</p>
              <h3 className="service-title">{service.title}</h3>
            </div>
          ))}
        </div>

        <div className="service-image">
          <img src={service} alt="Repair Service" />
          <div className="service-details">
            <p>
              Suscipit Duis arcu iaculis class nullam sociis nibh rutrum aliquam
              vulputate hendrerit quam pretium et quisque
            </p>
            <a href="#" className="service-link">Service Details →</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepairServices;
