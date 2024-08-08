import React from 'react';
import './Header.css'; 
import { NavLink } from 'react-router-dom';

import Avatar from '../../assets/Avatar.png';
import Doorbell from '../../assets/Doorbell.png';
import Search from '../../assets/Search.png';


const Header = () => {
  return (
    <header className="header">
      <div className="search-container">
        <button>  <img src={Search} alt="Search" className="search-icon" />
        </button>
        <input type="text" placeholder="Search Product, Employee..." />
      </div>
      <div className="notification-container">
 <NavLink to="/notifications">
 <img src={Doorbell} alt="Notification" />
 </NavLink>
 </div>
      <div className="profile-container">
 <NavLink to="/profile">
 <img src={Avatar} alt="Profile" />
 </NavLink>
 </div>
    </header>
  );
};

export default Header;
