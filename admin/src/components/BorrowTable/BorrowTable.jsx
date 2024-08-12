import './BorrowTable.css'
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
    const BorrowTable = ({ products }) => {
        return (
            <div className="connta">
  <div className="borrow-container">

<div className="borrow-heading">
    <h3>Borrow Approval</h3>
    <NavLink to={'/admin/addProduct'} className="pages">Add Borrow</NavLink>
 </div>

 <table className="borrow-table">
        <thead>
            <tr>
                <th className="title">Request ID</th>
                <th className="title">Name</th>
                <th className="title">Company</th>
                <th className="title">Product ID</th>
                <th className="title">Quantity</th>
                <th className="title">Purpose</th>
                <th className="title">Request Date</th>
                <th className="title">Statu</th>
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
                    <td className="data">{item.product_category}</td>
                    <td className="data">{item.product_category}</td>
                    <td className="button"> 
                        <button type="submit" className="edit">Accept</button>
                        <button type="submit" onClick={() => {removeProduct(item.product_id)}} className="delete">Decline</button>
                    </td>
                  
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
            </div>
          
        );
    };

    export default BorrowTable;
