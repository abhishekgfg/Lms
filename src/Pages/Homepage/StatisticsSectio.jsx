import React from "react";
import { FaUserTie, FaTools, FaBuilding, FaMedal } from "react-icons/fa";
import '../../Style/Statistics.css'; // Import the CSS file

const StatsSection = () => {
  const stats = [
    { icon: <FaUserTie />, number: "80", label1: "Member", label2: "Professional" },
    { icon: <FaTools />, number: "70", label1: "Project", label2: "Completed" },
    { icon: <FaBuilding />, number: "60", label1: "Total", label2: "Branches" },
    { icon: <FaMedal />, number: "50", label1: "Client", label2: "Satisfaction" },
  ];

  return (
    <div className="stats-section">
      {stats.map((item, index) => (
        <div key={index} className="stat-item">
          <div className="icon-circle">{item.icon}</div>
          <div className="stat-details">
            <h2 className="number">{item.number}</h2>
            <div className="labels">
              <p className="label-upper">{item.label1}</p>
              <p className="label-lower">{item.label2}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
