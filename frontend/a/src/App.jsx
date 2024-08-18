
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import Dashboard from './pages/Employee_Dashboard/Dashboard'
import Inventory from './pages/Employee_Inventory/Inventory'
import Borrow from './pages/Employee_Borrow/Borrow'
import Setting from './pages/Setting/Setting'
import Header from './components/Header/Header'
import BorrowProduct from './components/Borrow/borrowProduct'
import Login from './pages/Auth/login/login'
import Signup from './pages/Auth/signup/signup'

const App = () => {
  return (
  <main className="container">
    <BrowserRouter>
    <Header/>
    <Sidebar/>
     <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/inventory" element={<Inventory/>}>
        </Route>
        <Route path="/borrow" element={<Borrow/>}/>
        <Route path="/setting" element={<Setting/>}/>
        <Route path='/borrowProduct' element={<BorrowProduct />} />
     </Routes>
    
    </BrowserRouter>
  </main>
  )
}

export default App
