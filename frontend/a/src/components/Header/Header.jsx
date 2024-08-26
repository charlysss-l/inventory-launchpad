import React from 'react';
import './Header.css'; 
import { NavLink, useNavigate } from 'react-router-dom';

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
 </NavLink>
 </div>
      <div className="profile-container">
 <NavLink to="/profile">
 </NavLink>
 </div>
    </header>
  );
};

export default Header;
