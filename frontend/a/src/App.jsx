
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import Dashboard from './pages/Employee_Dashboard/Dashboard'
import Inventory from './pages/Employee_Inventory/Inventory'
import Borrow from './pages/Employee_Borrow/Borrow'
import Setting from './pages/Setting/Setting'
import Product from './pages/Product'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
  <main className="container">
    <BrowserRouter>
    <Header/>
    <Sidebar/>
     <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/inventory" element={<Inventory/>}>
          <Route path=":productId" element={<Product/>}/>
        </Route>
        <Route path="/borrow" element={<Borrow/>}/>
        <Route path="/setting" element={<Setting/>}/>
        {/*<Route path="/login" element={<Login/>}/>*/}
     </Routes>
     <Footer/>
    </BrowserRouter>
  </main>
  )
}

export default App
