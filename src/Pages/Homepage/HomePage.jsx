import React from "react";
import "../../Style/Home.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaGoogle } from "react-icons/fa";
import logohead from "../../Image/logo-eRVar-dC (1).svg";
// import contactLogo from "../Image/contact-logo.png";
// import supportLogo from "../Image/support-logo.png";
import heroImage1 from "../../Image/ddd.png";
import heroImage2 from "../../Image/Leveraging-Your-LMS-For-Association-Growth.webp";
import yellow from "../../Image/yelloe.png"

const Navbar = () => {
    return (
        <header>
            <div className="top-bar">
                <div className="no-extra-charges">
                    {/* Logo on the left */}
                    <img src={yellow} alt="Charges Logo" className="charges-icon" />
                    <span>We do not receive extra charges</span>
                </div>

                <div className="nav-links2">
                    <a href="#">About Us</a>
                    <span >|</span>
                    <a href="#">Terms & Condition</a>
                    <span>|</span>
                    <a href="#">Apply Online </a>
                </div>
                <div className="line"><li> |</li></div>

                <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <a href="https://google.com" target="_blank" rel="noopener noreferrer"><FaGoogle /></a>
                </div>
           
            </div>
            <nav className="navbarHo">
               <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
  <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
    <img src={logohead} alt="Airvice Logo" style={{ height: '40px', marginRight: '10px' }} />
    {/* <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#000' }}>Airvice</span> */}
  </a>
</div>

                <div className="contact-info">
                    <div className="contact-item">
                    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="36px" height="43px">
                                       <path fill-rule="evenodd" fill="rgb(255, 102, 0)" d="M33.018,26.645 C31.263,29.365 28.965,31.759 26.533,34.291 C24.113,36.808 21.612,39.413 19.600,42.439 C19.369,42.785 18.974,42.993 18.543,42.993 L17.456,42.993 C17.025,42.993 16.630,42.785 16.399,42.439 C14.388,39.414 11.886,36.811 9.467,34.291 C7.032,31.757 4.735,29.365 2.981,26.645 C0.978,23.542 0.003,20.414 -0.000,17.084 C0.005,12.518 1.880,8.225 5.279,4.997 C8.677,1.770 13.195,-0.009 18.000,-0.009 C22.804,-0.009 27.321,1.770 30.720,4.997 C34.119,8.225 35.993,12.518 35.999,17.084 C35.996,20.413 35.021,23.542 33.018,26.645 ZM18.000,2.370 C9.463,2.370 2.510,8.971 2.500,17.088 C2.507,23.520 6.587,27.768 11.312,32.688 C13.433,34.895 15.624,37.177 17.540,39.782 L17.999,40.405 L18.459,39.782 C20.376,37.174 22.567,34.895 24.686,32.688 C29.411,27.768 33.492,23.520 33.498,17.084 C33.489,8.971 26.536,2.370 18.000,2.370 ZM27.107,20.894 C26.986,20.894 26.865,20.877 26.747,20.842 C26.087,20.653 25.711,19.991 25.909,19.362 C26.139,18.633 26.256,17.872 26.256,17.103 C26.256,12.776 22.552,9.254 18.000,9.254 C13.447,9.254 9.743,12.776 9.743,17.103 C9.743,21.430 13.447,24.952 18.000,24.952 C18.770,24.952 19.532,24.851 20.265,24.654 C20.378,24.622 20.493,24.607 20.608,24.607 C21.163,24.607 21.658,24.962 21.810,25.472 C21.901,25.776 21.862,26.098 21.700,26.374 C21.537,26.652 21.271,26.852 20.950,26.938 C19.994,27.198 19.002,27.329 18.000,27.329 C12.068,27.329 7.243,22.742 7.243,17.103 C7.243,11.464 12.068,6.879 18.000,6.879 C23.931,6.879 28.756,11.464 28.756,17.103 C28.756,18.105 28.604,19.091 28.304,20.044 C28.147,20.542 27.655,20.894 27.107,20.894 Z"></path>
                                       </svg> 
                        <div>
                            <p className="con">Free Contact</p>
                            <p>28/4 Palmal,Amritsar</p>
                        </div>
                        
                    </div>
                    <div className="contact-item">
                    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="36px" height="43px">
                                       <path fill-rule="evenodd" fill="rgb(255, 102, 0)" d="M33.018,26.645 C31.263,29.365 28.965,31.759 26.533,34.291 C24.113,36.808 21.612,39.413 19.600,42.439 C19.369,42.785 18.974,42.993 18.543,42.993 L17.456,42.993 C17.025,42.993 16.630,42.785 16.399,42.439 C14.388,39.414 11.886,36.811 9.467,34.291 C7.032,31.757 4.735,29.365 2.981,26.645 C0.978,23.542 0.003,20.414 -0.000,17.084 C0.005,12.518 1.880,8.225 5.279,4.997 C8.677,1.770 13.195,-0.009 18.000,-0.009 C22.804,-0.009 27.321,1.770 30.720,4.997 C34.119,8.225 35.993,12.518 35.999,17.084 C35.996,20.413 35.021,23.542 33.018,26.645 ZM18.000,2.370 C9.463,2.370 2.510,8.971 2.500,17.088 C2.507,23.520 6.587,27.768 11.312,32.688 C13.433,34.895 15.624,37.177 17.540,39.782 L17.999,40.405 L18.459,39.782 C20.376,37.174 22.567,34.895 24.686,32.688 C29.411,27.768 33.492,23.520 33.498,17.084 C33.489,8.971 26.536,2.370 18.000,2.370 ZM27.107,20.894 C26.986,20.894 26.865,20.877 26.747,20.842 C26.087,20.653 25.711,19.991 25.909,19.362 C26.139,18.633 26.256,17.872 26.256,17.103 C26.256,12.776 22.552,9.254 18.000,9.254 C13.447,9.254 9.743,12.776 9.743,17.103 C9.743,21.430 13.447,24.952 18.000,24.952 C18.770,24.952 19.532,24.851 20.265,24.654 C20.378,24.622 20.493,24.607 20.608,24.607 C21.163,24.607 21.658,24.962 21.810,25.472 C21.901,25.776 21.862,26.098 21.700,26.374 C21.537,26.652 21.271,26.852 20.950,26.938 C19.994,27.198 19.002,27.329 18.000,27.329 C12.068,27.329 7.243,22.742 7.243,17.103 C7.243,11.464 12.068,6.879 18.000,6.879 C23.931,6.879 28.756,11.464 28.756,17.103 C28.756,18.105 28.604,19.091 28.304,20.044 C28.147,20.542 27.655,20.894 27.107,20.894 Z"></path>
                                       </svg> 


                        <div>
                            <p className="con">Online Support</p>
                            <p>Abhi@123.com</p>
                        </div>
                    </div>
                    <div className="contact-item">
                    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="36px" height="43px">
                                       <path fill-rule="evenodd" fill="rgb(255, 102, 0)" d="M33.018,26.645 C31.263,29.365 28.965,31.759 26.533,34.291 C24.113,36.808 21.612,39.413 19.600,42.439 C19.369,42.785 18.974,42.993 18.543,42.993 L17.456,42.993 C17.025,42.993 16.630,42.785 16.399,42.439 C14.388,39.414 11.886,36.811 9.467,34.291 C7.032,31.757 4.735,29.365 2.981,26.645 C0.978,23.542 0.003,20.414 -0.000,17.084 C0.005,12.518 1.880,8.225 5.279,4.997 C8.677,1.770 13.195,-0.009 18.000,-0.009 C22.804,-0.009 27.321,1.770 30.720,4.997 C34.119,8.225 35.993,12.518 35.999,17.084 C35.996,20.413 35.021,23.542 33.018,26.645 ZM18.000,2.370 C9.463,2.370 2.510,8.971 2.500,17.088 C2.507,23.520 6.587,27.768 11.312,32.688 C13.433,34.895 15.624,37.177 17.540,39.782 L17.999,40.405 L18.459,39.782 C20.376,37.174 22.567,34.895 24.686,32.688 C29.411,27.768 33.492,23.520 33.498,17.084 C33.489,8.971 26.536,2.370 18.000,2.370 ZM27.107,20.894 C26.986,20.894 26.865,20.877 26.747,20.842 C26.087,20.653 25.711,19.991 25.909,19.362 C26.139,18.633 26.256,17.872 26.256,17.103 C26.256,12.776 22.552,9.254 18.000,9.254 C13.447,9.254 9.743,12.776 9.743,17.103 C9.743,21.430 13.447,24.952 18.000,24.952 C18.770,24.952 19.532,24.851 20.265,24.654 C20.378,24.622 20.493,24.607 20.608,24.607 C21.163,24.607 21.658,24.962 21.810,25.472 C21.901,25.776 21.862,26.098 21.700,26.374 C21.537,26.652 21.271,26.852 20.950,26.938 C19.994,27.198 19.002,27.329 18.000,27.329 C12.068,27.329 7.243,22.742 7.243,17.103 C7.243,11.464 12.068,6.879 18.000,6.879 C23.931,6.879 28.756,11.464 28.756,17.103 C28.756,18.105 28.604,19.091 28.304,20.044 C28.147,20.542 27.655,20.894 27.107,20.894 Z"></path>
                                       </svg>
                        <div>
                            <p className="con">Free Contact</p>
                            <p>6202000340</p>
                        </div>
                    </div>
                   
                </div>
                
            </nav>
        </header>
    );
};

const HeroSection = () => {
    return (
        <section className="hero" style={{ backgroundImage: `url(${heroImage1}), url(${heroImage2})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <div className="hero-content">
                <p className="since">SINCE <span className="year">2010</span></p>
                <h1 className="herotxt"> We Provide Trusted <br />  Learning Solutions</h1>
                <p className="hero-subtext">From skill development to expert-led courses — empower your learning journey with ease.</p>
                <button className="explore-btn">Explore Services</button>
            </div>
        </section>
    );
};

const HomePage = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
        </>
    );
};

export default HomePage;
