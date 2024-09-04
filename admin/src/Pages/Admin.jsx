import React from 'react'

import {Route, Routes, useLocation} from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'
import Admin_Dashboard from './Dashboard/Admin_Dashboard'
import Admin_Inventory from './Inventory/Admin_Inventory'
import AddProduct from '../components/AddProduct/AddProduct'
import Admin_Borrow from './Borrow/Admin_Borrow'
import Admin_Setting from './Setting/Admin_Setting'

import EditProduct from '../components/EditProduct/EditProduct'
import AddBorrowProduct from '../components/AddBorrowProduct/AddBorrowProduct'
import './Admin.css'
import Login from './Auth/login'
import Admin_Category from './Category/Admin_Category'


const Admin = () => {
  const location = useLocation();
  return (

<main className="admin-page">

{/* {location.pathname !== '/admin/login' && <Sidebar />} */}
{location.pathname !== '/' && <Sidebar />}
     <Routes>
        {/* <Route path='/admin/login' element={<Login />}></Route> */}
        <Route path='/' element={<Login />}></Route>
        <Route path="/admin/dashboard" element={<Admin_Dashboard />}/>
        <Route path="/admin/inventory" element={<Admin_Inventory />}/>
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

