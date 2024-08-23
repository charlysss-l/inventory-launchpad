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
import EditProduct from '../components/EditProduct/EditProduct'
import AddBorrowProduct from '../components/AddBorrowProduct/AddBorrowProduct'
import './Admin.css'
import Login from './Auth/login/login'
import Signup from './Auth/signup/signup'

import Admin_Category from './Category/Admin_Category'


const Admin = () => {
  return (
    // add sidebar and header components dito pare
<main className="admin-page">
<Sidebar/>
<Header />
     <Routes>
        <Route path=''></Route>
        <Route></Route>
        <Route path="/admin" element={<Admin_Dashboard />}/>
        <Route path="/admin/inventory" element={<Admin_Inventory />}/>
        <Route path="/admin/employee" element={<Admin_Employee />}/>
        <Route path="/admin/borrow" element={<Admin_Borrow/>}/>
        <Route path="/admin/setting" element={<Admin_Setting/>}/>
        <Route path="/admin/addProduct" element={<AddProduct />}/>
        <Route path="/admin/editProduct/:product_id" element={<EditProduct />}/>
        <Route path="/admin/addBorrowProduct/:product_id" element={<AddBorrowProduct />} />
        <Route path="/admin/:category" element={<Admin_Category />} />
    
        {/* <Route path="/admin/hardwares" element={<Admin_Category category="hardwares" />}></Route> */}
     </Routes>
</main>
    
  )
}

export default Admin

