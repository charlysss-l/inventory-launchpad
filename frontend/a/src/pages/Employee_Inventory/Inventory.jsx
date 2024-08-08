import React from 'react';
import './Inventory.css';

const Inventory = () => {
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
            <th className="title">Date Purchased</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="data">000</td>
            <td className="data">Laptop</td>
            <td className="data">Asus</td>
            <td className="data">13</td>
            <td className="data">Peripherals</td>
            <td className="data">07/22/2021</td>
          </tr>
          <tr>
            <td className="data">001</td>
            <td className="data">GPU</td>
            <td className="data">MSi</td>
            <td className="data">12</td>
            <td className="data">Peripherals</td>
            <td className="data">07/22/2021</td>
          </tr>
          <tr>
            <td className="data">002</td>
            <td className="data">Mouse</td>
            <td className="data">Logitech</td>
            <td className="data">9</td>
            <td className="data">Wired</td>
            <td className="data">07/22/2021</td>
          </tr>
          <tr>
            <td className="data">003</td>
            <td className="data">KeyBoard</td>
            <td className="data">Logitech</td>
            <td className="data">6</td>
            <td className="data">Wired</td>
            <td className="data">07/22/2021</td>
          </tr>
          <tr>
            <td className="data">004</td>
            <td className="data">KeyBoard</td>
            <td className="data">Logitech</td>
            <td className="data">6</td>
            <td className="data">Wired</td>
            <td className="data">07/22/2021</td>
          </tr>
          <tr>
            <td className="data">005</td>
            <td className="data">KeyBoard</td>
            <td className="data">Logitech</td>
            <td className="data">6</td>
            <td className="data">Wired</td>
            <td className="data">07/22/2021</td>
          </tr>
          <tr>
            <td className="data">006</td>
            <td className="data">KeyBoard</td>
            <td className="data">Logitech</td>
            <td className="data">6</td>
            <td className="data">Wired</td>
            <td className="data">07/22/2021</td>
          </tr>
          <tr>
            <td className="data">007</td>
            <td className="data">KeyBoard</td>
            <td className="data">Logitech</td>
            <td className="data">6</td>
            <td className="data">Wired</td>
            <td className="data">07/22/2021</td>
          </tr>
          <tr>
            <td className="data">008</td>
            <td className="data">KeyBoard</td>
            <td className="data">Logitech</td>
            <td className="data">6</td>
            <td className="data">Wired</td>
            <td className="data">07/22/2021</td>
          </tr>
        </tbody>
      </table>
      <div className="inventory-pagination">
        <button className="inventory-button">Previous</button>
        <span className="inventory-page-info">Page 1 of 10</span>
        <button className="inventory-button">Next</button>
      </div>
    </div>
  );
};

export default Inventory;

