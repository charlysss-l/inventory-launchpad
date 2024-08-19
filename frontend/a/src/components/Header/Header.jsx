import React from 'react';
import './Header.css'; 
import { NavLink, useNavigate } from 'react-router-dom';

import Avatar from '../../assets/Avatar.png';
import Doorbell from '../../assets/Doorbell.png';
import Search from '../../assets/Search.png';


const Header = () => {
  const token = localStorage.getItem("token")
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate('/login')
  }

  return (
    <header className="header">
      <div className="search-container">
      <h1>{token? "loggedIn" : "not loggedIn"}</h1>
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
 {token? (
      <>
      <NavLink onClick={handleLogout}>Logout</NavLink>
      </>
  )
  :
  (
    <>
    <NavLink to="/signup">Signup</NavLink>
    <NavLink to="/login">Login</NavLink>
    </>
  )
 }
 </div>
    </header>
  );
};

export default Header;
