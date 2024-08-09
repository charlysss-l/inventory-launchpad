import React from 'react'

import {Route, Routes} from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'
import Admin_Dashboard from './Dashboard/Admin_Dashboard'
import Admin_Inventory from './Inventory/Admin_Inventory'
import Admin_Employee from './Employee/Admin_Employee'
import AddProduct from '../components/AddProduct/AddProduct'
import Admin_Borrow from './Borrow/Admin_Borrow'
import Admin_Setting from './Setting/Admin_Setting'
import Header from '../components/Header/Header'
import './Admin.css'
const Admin = () => {
  return (
    // add sidebar and header components dito pare
<main className="admin-page">
<Sidebar/>
<Header />
     <Routes>
     <Route path="/admin" element={<Admin_Dashboard />}/>
        <Route path="/admin/inventory" element={<Admin_Inventory />}/>
        <Route path="/admin/employee" element={<Admin_Employee />}/>
        <Route path="/admin/borrow" element={<Admin_Borrow/>}/>
        <Route path="/admin/setting" element={<Admin_Setting/>}/>
        <Route path="/admin/addProduct" element={<AddProduct />}/>
     </Routes>
</main>

    
  )
}

export default Admin

