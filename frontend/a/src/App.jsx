
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import Dashboard from './pages/Employee_Dashboard/Dashboard'
import Inventory from './pages/Employee_Inventory/Inventory'
import Borrow from './pages/Employee_Borrow/Borrow'
import Setting from './pages/Setting/Setting'
import Header from './components/Header/Header'
import AddBorrowProduct from './components/addBorrowProducts/AddBorrowProduct'
import Login from './pages/Auth/login/login'
import Signup from './pages/Auth/signup/signup'

import Employe_Category from './pages/Employee_Category/Employee_Category'

const App = () => {
  return (
    <BrowserRouter>
  <main className="container">
    <Header/>
    <Sidebar/>
     <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<Signup />}></Route>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/inventory" element={<Inventory/>}>
        </Route>
        <Route path="/borrow" element={<Borrow/>}/>
        <Route path="/setting" element={<Setting/>}/>
        <Route path="/addBorrowProduct/:product_id" element={<AddBorrowProduct />} />
        <Route path="/userCategory/:category" element={<Employe_Category />} />
     </Routes>
    
  </main>
    </BrowserRouter>
  )
}

export default App
