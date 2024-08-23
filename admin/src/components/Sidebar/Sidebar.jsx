import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="side_container">
            <div className="choices">
                <h1 className="logo">Launchpad</h1>
                <NavLink to={'/admin/dashboard'} className="pages">Dashboard</NavLink>
                <NavLink to={'/admin/inventory'} className="pages">Inventory</NavLink>
                <NavLink to={'/admin/employee'} className="pages">Employee</NavLink>
                <NavLink to={'/admin/borrow'} className="pages">Borrow</NavLink>
                <NavLink to={'/admin/hardwares'} className="pages">Hardwares</NavLink>
      
                <NavLink to={'/admin/furnitures'} className="pages">Furnitures</NavLink>
            </div>
            <div className="bottom">
                <NavLink to={'/admin/setting'} className="bottom-link">Setting</NavLink>
                <NavLink to={'/admin/logout'} className="bottom-link">Logout</NavLink>
            </div>
        </div>
    );
};

export default Sidebar;
