import React from 'react';
import '../../Style/Form.css';

const Form = () => {
    return (
        <div className="form-container">
            <div className="form-section">
                <h2 className='free'>Free Estimate</h2>
                <form>
                    <input type="text" placeholder="Your Name" required />
                    <input type="text" placeholder="Phone Number" required />
                    <select required>
                        <option value="">Choose Service</option>
                    </select>
                    <textarea placeholder="Write Message" required></textarea>
                    <button type="submit">Free Estimate</button>
                </form>
            </div>
            <div className="content-section">
                <h3 className="about">About company</h3>
                <h1>We are most popular repair company</h1>
                <p>
                    Duis nunc sodales conubia ad laoreet aliquet nostra. Eleifend lacinia praesent hendrerit 
                    quisque penatibus erat. At pulvinar integer semper ridiculus lectus condimentum obor 
                    tise verodar capmtaso morin proin nibh posuere.
                </p>
                <div className="stats">
                    <div className="stat-box">
                        <h2>220+</h2>
                        <p className='expert'>Expert Technician</p>
                        <p className='text1'>Suscipit duis arcu iaculis 
                            class so nullam nibh rutrum aliquam vulputa to 
                            hendreris quam pretium quisque</p>
                    </div>
                    <div className="stat-box">
                        <h2>230+</h2>
                        <p className='expert'>Complete Project</p>
                        <p className='text1'>Suscipit duis arcu iaculis class so nullam 
                            nibh rutrum aliquam vulputa to
                            hendreris quam pretium quisque</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
