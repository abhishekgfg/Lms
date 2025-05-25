import React from 'react';
import '../../Style/ServiceSection.css';
import qualityTestingImg from '../../Image/work-img-1.jpg';
import heatingServicesImg from '../../Image/work-img-2.jpg';
import acInstallationImg from '../../Image/work-img-3.jpg';

const Service = () => {
    return (
        <div className="services-section">
            <h3>Main Services</h3>
            <h2>We provide most popular <br /> repair services</h2>
            
            <div className="services-container">
                <div className="service-box">
                    <img src={qualityTestingImg} alt="Quality Testing" />
                    <div className="service-content">
                        <h4>Quality Testing</h4>
                        <p>Eleifend lacinia prasent hendrerit quisque penatibus erat eat pulvinar</p>
                        <p className="service-details">— Service Details —</p>
                    </div>
                </div>

                <div className="service-box">
                    <img src={heatingServicesImg} alt="Heating Services" />
                    <div className="service-content">
                        <h4>Heating Services</h4>
                        <p>Integer semper ridiculus lectus condimentum obor tise verodar often the biak.</p>
                        <p className="service-details">— Service Details —</p>
                    </div>
                </div>

                <div className="service-box">
                    <img src={acInstallationImg} alt="AC Installation" />
                    <div className="service-content">
                        <h4>AC Installation</h4>
                        <p>Suscipit duis arest iaculis class nullam meise nibhie rutrum aliquam vulputa</p>
                        <p className="service-details">— Service Details —</p>
                    </div>
                </div>
            </div>
            
            <div className="service-footer">
                If you want to know about our more service - <a href="#">Click here now</a>
            </div>
        </div>
    );
};

export default Service;
