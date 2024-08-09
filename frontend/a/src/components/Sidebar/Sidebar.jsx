
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="side_container">
      <div className="choices">
        <h1 className="logo">Launchpad</h1>
        <NavLink to={'/admin'} className="pages">Dashboard</NavLink>
        <NavLink to={'/admin/inventory'} className="pages">Inventory</NavLink>
        <NavLink to={'/admin/borrow'} className="pages">Borrow</NavLink>
      </div>

      <div className="bottom">
        <a href={'/admin/setting'} className="bottom-link">Setting</a>
        <a href={'/admin/logout'} className="bottom-link">Logout</a>
      </div>
    </div>
  );
}

export default Sidebar;