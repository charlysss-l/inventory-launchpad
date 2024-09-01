import { NavLink,useNavigate } from 'react-router-dom';
import './Sidebar.css';
import { useState } from 'react';
const Sidebar = () => {
    const token = localStorage.getItem("token")
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate('/admin/login')
  }

  const [reservationDropdownOpen, setReservationDropdownOpen] = useState(false);

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
                  <NavLink to={'/admin/inventory'} >All Products</NavLink>
                  <NavLink to={'/admin/hardwares'}>Hardwares</NavLink>
                      <NavLink to={'/admin/furnitures'}>Furnitures</NavLink>
                      <NavLink to={'/admin/appliances'} >Appliances</NavLink>    
                      <NavLink to={'/admin/lightings'}>Lightings</NavLink>    
                      <NavLink to={'/admin/others'}>Others</NavLink>    
                  </div>
              )}
              </li>
              <li className="choices">
              <NavLink to={'/admin/borrow'} className="pages">Borrow History</NavLink>
              </li>
  
      
              <div className="bottom">
                  <button onClick={handleLogout} className='buttom-link'>Logout</button>
              </div>
      </nav>
    );
  };
  




export default Sidebar;

// import { NavLink, useNavigate } from 'react-router-dom';
// import './Sidebar.css';
// import { useState } from 'react';

// const Sidebar = () => {
//     const token = localStorage.getItem("token");
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         localStorage.removeItem("token");
//         navigate('/admin/login');
//     };

//     const [reservationDropdownOpen, setReservationDropdownOpen] = useState(false);

//     const toggleReservationDropdown = () => {
//         setReservationDropdownOpen(!reservationDropdownOpen);
//     };

//     return (
//         <nav className="navbar">
//             <div className="logo">Launchpad</div>
//             <ul className="choices-list">
//                 <li className="choices">
//                     <NavLink
//                         to={'/admin/dashboard'}
//                         className={({ isActive }) => isActive ? 'pages active' : 'pages'}
//                     >
//                         Dashboard
//                     </NavLink>
//                 </li>
//                 <li className="choices" onClick={toggleReservationDropdown}>
//                     <span className="dropbtn">Inventory</span>
//                     {reservationDropdownOpen && (
//                         <div className="dropdown-content">
//                             <NavLink
//                                 to={'/admin/inventory'}
//                                 className={({ isActive }) => isActive ? 'dropdown-link active' : 'dropdown-link'}
//                             >
//                                 All Products
//                             </NavLink>
//                             <NavLink
//                                 to={'/admin/hardwares'}
//                                 className={({ isActive }) => isActive ? 'dropdown-link active' : 'dropdown-link'}
//                             >
//                                 Hardwares
//                             </NavLink>
//                             <NavLink
//                                 to={'/admin/furnitures'}
//                                 className={({ isActive }) => isActive ? 'dropdown-link active' : 'dropdown-link'}
//                             >
//                                 Furnitures
//                             </NavLink>
//                             <NavLink
//                                 to={'/admin/appliances'}
//                                 className={({ isActive }) => isActive ? 'dropdown-link active' : 'dropdown-link'}
//                             >
//                                 Appliances
//                             </NavLink>
//                             <NavLink
//                                 to={'/admin/lightings'}
//                                 className={({ isActive }) => isActive ? 'dropdown-link active' : 'dropdown-link'}
//                             >
//                                 Lightings
//                             </NavLink>
//                             <NavLink
//                                 to={'/admin/others'}
//                                 className={({ isActive }) => isActive ? 'dropdown-link active' : 'dropdown-link'}
//                             >
//                                 Others
//                             </NavLink>
//                         </div>
//                     )}
//                 </li>
//                 <li className="choices">
//                     <NavLink
//                         to={'/admin/borrow'}
//                         className={({ isActive }) => isActive ? 'pages active' : 'pages'}
//                     >
//                         Borrow History
//                     </NavLink>
//                 </li>
//             </ul>
//             <div className="bottom">
//                 <button onClick={handleLogout} className='bottom-link'>Logout</button>
//             </div>
//         </nav>
//     );
// };

// export default Sidebar;
