
import './Table.css'
import { NavLink } from 'react-router-dom';
    const Table = ({ products }) => {
        return (
            <div className="inventory-container">

            <div className="inventory-heading">
                <h3>Products</h3>
                <NavLink to={'/admin/addProduct'} className="pages">Add Product</NavLink>
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
                            <th className="title">Update</th>
                            <th className="title">Delete</th>
                            <h1>sample</h1>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((item, index) => (
                            <tr key={index}>
                                <td className="data">{item.product_id}</td>
                                <td className="data">{item.product_name}</td>
                                <td className="data">{item.product_brand}</td>
                                <td className="data">{item.product_quantity}</td>
                                <td className="data">{item.product_category}</td>
                                <td className="data">{item.product_datePurchased}</td>
                                <button type="submit" className="edit">Edit</button>
                                <button type="submit" className="delete">Delete</button>
                            </tr>
                        ))}
                    </tbody>
                </table>
      {/* figure out pa if pagination or isang table nlng scroll scroll nlng */}
      {/* <div className="inventory-pagination">
        <button className="inventory-button">Previous</button>
        <span className="inventory-page-info">Page 1 of 10</span>
        <button className="inventory-button">Next</button>
      </div> */}
    </div>
        );
    };

    export default Table;


