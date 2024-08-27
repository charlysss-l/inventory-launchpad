
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import { useState } from 'react';
const Sidebar = () => {


  const [reservationDropdownOpen, setReservationDropdownOpen] = useState(false);

  const toggleReservationDropdown = () => {
    setReservationDropdownOpen(!reservationDropdownOpen);

  };


    return (
        <nav className="navbar">
        <div className="logo">Launchpad</div>
              <li className="choices">
              <NavLink to={'/'} className="pages">Dashboard</NavLink>
              </li>
              <li 
              className="choices" 
              onClick={toggleReservationDropdown}
              >
              <span className="dropbtn">Inventory</span>
              {reservationDropdownOpen && (
                  <div className="dropdown-content">
                  <NavLink to={'/inventory'} >History</NavLink>
                  <NavLink to={'/userCategory/hardwares'}>Hardwares</NavLink>
                      <NavLink to={'/userCategory/furnitures'}>Furnitures</NavLink>
                      <NavLink to={'/userCategory/appliances'} >Appliances</NavLink>    
                      <NavLink to={'/userCategory/lightings'}>Lightings</NavLink>    
                      <NavLink to={'/userCategory/others'}>Others</NavLink>    
                  </div>
              )}
              </li>
      </nav>
    );
  };
  




export default Sidebar;
