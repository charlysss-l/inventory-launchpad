import React from 'react';
import { NavLink } from 'react-router-dom';
import './LandingPage.css';
import fallGuy from '../../assets/fallGuy.png';
import laptop from '../../assets/laptop.png';
import box from '../../assets/box.png';
import box2 from '../../assets/box2.png';
import chair from '../../assets/chair.png';

const LandingPage = () => {
    // const handleButtonClick = () => {
    //     alert('Button clicked!');
    // };

    return (    
        <div className="landing-page">
            <img src={laptop} alt="Logo" className="laptop" />
            <img src={box} alt="Logo" className="box" />
            <img src={box2} alt="Logo" className="box2" />
            <img src={chair} alt="Logo" className="chair" />
            <img src={fallGuy} alt="Logo" className="fallGuy" />
            <header className="landing-header">
                <h1>Launchpad Coworking <br/> Inventory</h1>
                <p>"Explore and manage all the resources you need for your next big idea."</p>
                {/* <button className="cta-button" onClick={handleButtonClick}>
                    Get Started
                </button> */}
                <NavLink className="cta-button" to={'/inventory'}> 
                    Check Inventory
                </NavLink>
            </header>
        </div>
    );
};

export default LandingPage;