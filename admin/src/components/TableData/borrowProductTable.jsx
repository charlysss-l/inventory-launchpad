
import './productTable.css'
import { NavLink } from 'react-router-dom';
const removeBorrowProduct = async (borrowId) => {
    await fetch('http://localhost:3000/remove-borrow-products', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({borrowId:borrowId})
        
    }).then((resp)=> {
        resp.ok? alert('Are you sure you want to remove the product?') : alert("Failed to remove the product")
    })
}
    const borrowProductTable = ({ products }) => {
        return (
            <div className="conn">
  <div className="inventory-container">

<div className="inventory-heading">
    <h3>Products</h3>
    <NavLink to={'/admin/addBorrowProduct'} className="pages">Borrow Product-manual</NavLink>
 </div>

 <table className="inventory-table">
        <thead>
            <tr>
                <th className="title">Borrow ID</th>
                <th className="title">Name</th>
                <th className="title">Quantity</th>
                <th className="title">Date bnrrow?</th>
                <th className="title">Purpose</th>
                <th className="title">Delete</th>
            </tr>
        </thead>
        <tbody>
            {products.map((item, index) => (
                <tr key={index}>
                    <td className="data">{item.borrowId}</td>
                    <td className="data">{item.borrowName}</td>
                    <td className="data">{item.borrowQuantity}</td>
                    <td className="data">{item.borrowDate}</td>
                    <td className="data">{item.purpose}</td>
                    <td className="data"><button type="submit" onClick={() => {removeBorrowProduct(item.borrowId)}} className="delete">Delete</button></td>
                  
                </tr>
            ))}
        </tbody>
    </table>
</div>
            </div>
          
        );
    };
    
    export default borrowProductTable;
    
    
    {/* figure out pa if pagination or isang table nlng scroll scroll nlng */}
    {/* <div className="inventory-pagination">
    <button className="inventory-button">Previous</button>
    <span className="inventory-page-info">Page 1 of 10</span>
    <button className="inventory-button">Next</button>
    </div> */}