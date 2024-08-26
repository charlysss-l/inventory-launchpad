import './productTable.css'
import { NavLink } from 'react-router-dom';

const removeBorrowProduct = async (borrowId) => {
    await fetch('http://localhost:3000/remove-borrow-products', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ borrowId: borrowId })
    }).then((resp) => {
        resp.ok ? alert('Product removed successfully') : alert("Failed to remove the product")
    })
}

const acceptBorrowProduct = async (borrowId) => {
    await fetch('http://localhost:3000/accept-borrow-product', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ borrowId: borrowId })
    }).then((resp) => {
        resp.ok ? alert('Product accepted successfully') : alert("Failed to accept the product")
        window.location.reload(); // Reload page to reflect changes
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
                            <th className="title">Item Name</th>
                            <th className="title">Quantity</th>
                            <th className="title">Date Borrowed</th>
                            <th className="title">Purpose</th>
                            <th className="title">Destination</th>
                            <th className="title">ANO KA?</th>
                            <th className="title">Borrower's Name</th>
                            <th className="title">Borrower's Gmail</th>
                            <th className="title">Borrower's Number</th>
                            <th className="title">Status</th>
                            <th className="title">Actions</th>
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
                                <td className="data">{item.destination}</td>
                                <td className="data">{item.clientStaff}</td>
                                <td className="data">{item.borrowerName}</td>
                                <td className="data">{item.borrowerGmail}</td>
                                <td className="data">{item.borrowerNumber}</td>
                                <td className="data">{item.isAccepted ? "Accepted" : "Pending"}</td>
                                <td className="data">
                                    <button type="submit" onClick={() => { removeBorrowProduct(item.borrowId) }} className="delete">Delete</button>
                                    {!item.isAccepted && <button onClick={() => { acceptBorrowProduct(item.borrowId) }} className="acceptbutton">Accept</button>}
                                </td>
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