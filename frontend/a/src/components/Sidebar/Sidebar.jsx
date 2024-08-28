
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="navbar">
        <h1 className="logo">Launchpad</h1>
      <div className="choices">
        <NavLink to={'/'} className="pages">Dashboard</NavLink>
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
