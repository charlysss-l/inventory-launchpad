import { NavLink,useNavigate } from 'react-router-dom';
import './Sidebar.css';
import { useState } from 'react';
const Sidebar = () => {
    const token = localStorage.getItem("token")
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate('/')
  }

  const [reservationDropdownOpen, setReservationDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleReservationDropdown = () => {
    setReservationDropdownOpen(!reservationDropdownOpen);

  };


    return (
        <nav className="navbar">
        <div className="logo">Launchpad</div>
              <li className="choices">
              <NavLink to={'/admin/dashboard'} className="pages">Dashboard</NavLink>
              </li>
              <li 
              className="choices" 
              onClick={toggleReservationDropdown}
              >
              <span className="dropbtn">Inventory</span>
              {reservationDropdownOpen && (
                  <div className="dropdown-content">
                  <NavLink to={'/admin/inventory'} >History</NavLink>
                  <NavLink to={'/admin/hardwares'}>Hardwares</NavLink>
                      <NavLink to={'/admin/furnitures'}>Furnitures</NavLink>
                      <NavLink to={'/admin/appliances'} >Appliances</NavLink>    
                      <NavLink to={'/admin/lightings'}>Lightings</NavLink>    
                      <NavLink to={'/admin/others'}>Others</NavLink>    
                  </div>
              )}
              </li>
              <li className="choices">
              <NavLink to={'/admin/borrow'} className="pages">Borrow</NavLink>
              </li>
  
      
              <div className="bottom">
                  <NavLink onClick={() => {handleLogout}} className="bottom-link">Logout</NavLink>
              </div>
      </nav>
    );
  };
  




export default Sidebar;
