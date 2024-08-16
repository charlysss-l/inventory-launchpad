
import './productTable.css'
import { NavLink } from 'react-router-dom';
const removeProduct = async (product_id) => {
    await fetch('http://localhost:3000/removeproduct', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({product_id:product_id})
        
    }).then((resp)=> {
        resp.ok? alert('Are you sure you want to remove the product?') : alert("Failed to remove the product")
    })
}
    const productTable = ({ products }) => {
        return (
            <div className="conn">
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
                    <td className="data"><NavLink to={`/admin/editProduct/${item.product_id}`} className="editprod">Edit Product</NavLink></td>
                    <td className="data"><button type="submit" onClick={() => {removeProduct(item.product_id)}} className="delete">Delete</button></td>
                  
                </tr>
            ))}
        </tbody>
    </table>
</div>
            </div>
          
        );
    };
    
    export default productTable;
    
    
    {/* figure out pa if pagination or isang table nlng scroll scroll nlng */}
    {/* <div className="inventory-pagination">
    <button className="inventory-button">Previous</button>
    <span className="inventory-page-info">Page 1 of 10</span>
    <button className="inventory-button">Next</button>
    </div> */}
