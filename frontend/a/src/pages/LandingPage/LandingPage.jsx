import React from 'react';
import { NavLink } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
    // const handleButtonClick = () => {
    //     alert('Button clicked!');
    // };

    return (    
        <div className="landing-page">
            <header className="landing-header">
                <h1>Welcome to Our Website</h1>
                <p>Your journey to something amazing starts here.</p>
                {/* <button className="cta-button" onClick={handleButtonClick}>
                    Get Started
                </button> */}
                <NavLink className="cta-button" to={'/inventory'}> 
                    BOrrow
                </NavLink>
            </header>
        </div>
    );
};

export default LandingPage;