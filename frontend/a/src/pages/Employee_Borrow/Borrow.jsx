import React from 'react'
import './Borrow.css'
const Borrow = () => {
  return (
    <div className="inventory-container">
      <div className="inventory-heading">
        <h3>Products</h3>
      </div>
      <table className="inventory-table">
        <thead>
          <tr>
            <th className="title">Product_ID</th>
            <th className="title">Name</th>
            <th className="title">Brand</th>
            <th className="title">Quantity</th>
            <th className="title">Category</th>
            <th className="title">Borrow</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="data" >000</td>
            <td className="data">Laptop</td>
            <td className="data">Asus</td>
            <td className="data">13</td>
            <td className="data">Peripherals</td>
           <button> Borrow</button>
          </tr>
          <tr>
            <td className="data">000</td>
            <td className="data">Laptop</td>
            <td className="data">Asus</td>
            <td className="data">13</td>
            <td className="data">Peripherals</td>
           <button> Borrow</button>
          </tr>
          <tr>
            <td className="data">000</td>
            <td className="data">Laptop</td>
            <td className="data">Asus</td>
            <td className="data">13</td>
            <td className="data">Peripherals</td>
           <button> Borrow</button>
          </tr>
         
        </tbody>
      </table>
      <div className="inventory-pagination">
        <button className="inventory-button">Previous</button>
        <span className="inventory-page-info">Page 1 of 10</span>
        <button className="inventory-button">Next</button>
      </div>
    </div>
  )
}

export default Borrow
