
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="side_container">
      <div className="choices">
        <h1 className="logo">Launchpad</h1>
        <NavLink to={'/'} className="pages">Dashboard</NavLink>
        <NavLink to={'/inventory'} className="pages">Inventory</NavLink>
        <NavLink to={'/borrow'} className="pages">Borrow</NavLink>

        <NavLink to={'/userCategory/hardwares'} className="pages">Hardwares</NavLink>
                <NavLink to={'/userCategory/furnitures'} className="pages">Furnitures</NavLink>
      </div>

      <div className="bottom">
        <a href={'/setting'} className="bottom-link">Setting</a>
        <a href={'/logout'} className="bottom-link">Logout</a>
      </div>
    </div>
  );
}

export default Sidebar;