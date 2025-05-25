import React from 'react';
import '../../Style/RecentProjects.css';

// Import images (replace these paths with your actual image paths)
import image1 from '../../Image/about-img-1.jpg';
import image2 from '../../Image/about-img-2.jpg';
import image3 from '../../Image/work-img-1.jpg';
import image4 from '../../Image/about-img-2.jpg';
import image5 from '../../Image/work-img-2.jpg';

const projects = [
  { image: image1, title: "AC Dust Cleaning", service: "Cleaning Service" },
  { image: image2, title: "Repairman Checking", service: "Repair Service" },
  { image: image3, title: "Checking Quality", service: "Quality Service" },
  { image: image4, title: "Repair & Cleaning", service: "Cleaning Service" },
  { image: image5, title: "Emergency Repair", service: "Repair Conditioner" },
  { image: image5, title: "Emergency Repair", service: "Repair Conditioner" },
];

const RecentProjects = () => {
  return (
    <section className="recent-projects">
      <div className="header">
        <div className="left-header">
          <p className="subtitle">Latest Projects</p>
          <h2 className="title">Our Recent Projects</h2>
        </div>
        <div className="button-container">
          <button className="filter-button">All</button>
          <button className="filter-button">Testing</button>
          <button className="filter-button">Cleaning</button>
          <button className="filter-button">Repair</button>
        </div>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            {/* Image Container */}
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>

            {/* Project Details Container */}
            <div className="project-details-wrapper">
              <div className="project-info">
                <p className="service-type">{project.service}</p>
                <h3 className="project-title">{project.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
