import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './pages/Employee_Dashboard/Dashboard';
import Inventory from './pages/Employee_Inventory/Inventory';
// import Borrow from './pages/Employee_Borrow/Borrow';
import Setting from './pages/Setting/Setting';
import LandingPage from './pages/LandingPage/LandingPage';
import AddBorrowProduct from './components/addBorrowProducts/AddBorrowProduct';
// import Login from './pages/Auth/login/login';
// import Signup from './pages/Auth/signup/signup';
import Employe_Category from './pages/Employee_Category/Employee_Category';
import Footer from './components/Footer/Footer';
import MaybeShowNavbar from './components/MaybeShowNavbar/MaybeShowNavbar';


const App = () => {
  return (
    <BrowserRouter>
      <AppContent />

    </BrowserRouter>
    
  );
};

const AppContent = () => {
  const location = useLocation(); // Get the current location

  return (
    <main className="container">
      {/* Conditionally render Sidebar if not on LandingPage */}
      {location.pathname !== '/' && <Sidebar />}
      <Routes>
        {/* <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<Signup />} /> */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/inventory" element={<Inventory />} />
        {/* <Route path="/borrow" element={<Borrow />} /> */}
        <Route path="/setting" element={<Setting />} />
        <Route path="/addBorrowProduct/:product_id" element={<AddBorrowProduct />} />
        <Route path="/userCategory/:category" element={<Employe_Category />} />
      </Routes>
      <MaybeShowNavbar>
          <Footer />
        </MaybeShowNavbar>

    </main>
  );
};

export default App;

// import {BrowserRouter, Route, Routes} from 'react-router-dom'
// import Sidebar from './components/Sidebar/Sidebar'
// import Dashboard from './pages/Employee_Dashboard/Dashboard'
// import Inventory from './pages/Employee_Inventory/Inventory'
// // import Borrow from './pages/Employee_Borrow/Borrow'
// import Setting from './pages/Setting/Setting'
// import LandingPage from './pages/LandingPage/LandingPage'

// import AddBorrowProduct from './components/addBorrowProducts/AddBorrowProduct'
// // import Login from './pages/Auth/login/login'
// // import Signup from './pages/Auth/signup/signup'

// import Employe_Category from './pages/Employee_Category/Employee_Category'

// const App = () => {
//   return (
//     <BrowserRouter>
//   <main className="container">

//     <Sidebar/>
//      <Routes>
//         {/* <Route path="/login" element={<Login />} />
//         <Route path='/signup' element={<Signup />}></Route> */}
//         <Route path="/" element={<LandingPage/>}/>
//         <Route path="/inventory" element={<Inventory/>}>
//         </Route>
//         {/* <Route path="/borrow" element={<Borrow/>}/> */}
//         <Route path="/setting" element={<Setting/>}/>
//         <Route path="/addBorrowProduct/:product_id" element={<AddBorrowProduct />} />
//         <Route path="/userCategory/:category" element={<Employe_Category />} />
//      </Routes>
    
//   </main>
//     </BrowserRouter>
//   )
// }

// export default App
