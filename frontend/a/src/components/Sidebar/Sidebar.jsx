import React from 'react'
import {NavLink} from 'react-router-dom'
import './Sidebar.css'
const Sidebar = () => {
  return (
    <header>
        <nav>
          
          <NavLink to={'/'} className="sidebar">Dashboard</NavLink>
          <NavLink to={'/inventory'} className="sidebar">Inventory</NavLink>
          <NavLink to={'/borrow'} className="sidebar">Borrow</NavLink>
          <NavLink to={'/setting'} className="sidebar">Setting</NavLink>
          
        </nav>
  </header>

  )
}

export default Sidebar