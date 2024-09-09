import { NavLink } from 'react-router-dom';
import './Sidebar.css';
// import { useState } from 'react';
// const Sidebar = () => {
//   const [reservationDropdownOpen, setReservationDropdownOpen] = useState(false);

//   const toggleReservationDropdown = () => {
//     setReservationDropdownOpen(!reservationDropdownOpen);

//   };

//     return (
//         <nav className="navbar">
//         <div className="logo">Launchpad</div>
//               {/* <li className="choices">
//               <NavLink to={'/'} className="pages">Dashboard</NavLink>
//               </li> */}
//               <li 
//               className="choices" 
//               onClick={toggleReservationDropdown}
//               >
//               <span className="dropbtn">Inventory</span>
//               {reservationDropdownOpen && (
//                   <div className="dropdown-content">
//                   <NavLink to={'/inventory'} >All Products</NavLink>
//                   <NavLink to={'/userCategory/hardwares'} >Hardwares</NavLink>
//                <NavLink to={'/userCategory/furnitures'} >Furnitures</NavLink>
//               <NavLink to={'/userCategory/appliances'} >Appliances</NavLink>    
//               <NavLink to={'/userCategory/lightings'} >Lightings</NavLink>    
//                <NavLink to={'/userCategory/others'} >Others</NavLink>  
//                   </div>
//               )}
//               </li>
//       </nav>
//     );
//   };
  




// export default Sidebar;






const Sidebar = () => {
  return (
    <div className="navbar">
        <h1 className="logo">Launchpad Coworking</h1>
      <div className="choices">
        {/* <NavLink to={'/'} className="pages">Dashboard</NavLink> */}
        <NavLink to={'/inventory'} className="pages">Inventory</NavLink>
        {/* <NavLink to={'/borrow'} className="pages">Borrow</NavLink> */}

        <NavLink to={'/userCategory/hardwares'} className="pages">Hardwares</NavLink>
                <NavLink to={'/userCategory/furnitures'} className="pages">Furnitures</NavLink>
                <NavLink to={'/userCategory/appliances'} className="pages">Appliances</NavLink>    
                <NavLink to={'/userCategory/lightings'} className="pages">Lightings</NavLink>    
                <NavLink to={'/userCategory/others'} className="pages">Others</NavLink>
      </div>
    </div>
  );
}

export default Sidebar;



// import { NavLink } from 'react-router-dom';
// import './Sidebar.css';

// const Sidebar = () => {
//   const [reservationDropdownOpen, setReservationDropdownOpen] = useState(false);

//   const toggleReservationDropdown = () => {
//     setReservationDropdownOpen(!reservationDropdownOpen);

//   };

//   return (
//     <div className="navbar">
//         <h1 className="logo">Launchpad</h1>
//         <li className="choices">
//         <NavLink to={'/'} className="pages">Dashboard</NavLink>
//         </li>

//         <li className="choices" onClick={toggleReservationDropdown}>
//         <span className="dropbtn">Inventory</span>
//         {reservationDropdownOpen && (

//       <div className="dropdown-content">
//         <NavLink to={'/inventory'} className="pages">All Products</NavLink>
//         <NavLink to={'/userCategory/hardwares'} className="pages">Hardwares</NavLink>
//                 <NavLink to={'/userCategory/furnitures'} className="pages">Furnitures</NavLink>
//                 <NavLink to={'/userCategory/appliances'} className="pages">Appliances</NavLink>    
//                 <NavLink to={'/userCategory/lightings'} className="pages">Lightings</NavLink>    
//                 <NavLink to={'/userCategory/others'} className="pages">Others</NavLink>
//       </div>
//         )}
//         </li>

//     </div>
//   );
// }

// export default Sidebar;