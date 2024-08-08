import React from 'react'
import {NavLink} from 'react-router-dom'
import './Sidebar.css'
const Sidebar = () => {
  return (
    <div className="side_container">
    <nav className="nav_side">
      <h1 className="logo">Launchpad</h1>
      <NavLink to={'/admin'} className="sidebar">Dashboard</NavLink>
      <NavLink to={'/admin/inventory'} className="sidebar">Inventory</NavLink>
      <NavLink to={'/admin/borrow'} className="sidebar">Employee</NavLink>
      <NavLink to={'/admin/borrow'} className="sidebar">Borrow</NavLink>
      <NavLink to={'/admin/setting'} className="sidebar">Setting</NavLink>
      <NavLink to={'/admin/addProduct'} className="sidebar">Add Product</NavLink>
    </nav>
  </div>

  )
}

export default Sidebar