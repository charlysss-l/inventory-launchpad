import { NavLink,useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    const token = localStorage.getItem("token")
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate('/')
  }
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
                <NavLink to={'/admin/appliances'} className="pages">Appliances</NavLink>    
                <NavLink to={'/admin/lightings'} className="pages">Lightings</NavLink>    
                <NavLink to={'/admin/others'} className="pages">Others</NavLink>    
                    
            </div>
            <div className="bottom">
                <button onClick={handleLogout}>LOGOUT</button>
                {/* or */}
                <NavLink onClick={() => {handleLogout}} className="bottom-link">Logout</NavLink>
            </div>
        </div>
    );
};

export default Sidebar;
