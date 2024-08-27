import './productTable.css';
import { NavLink } from 'react-router-dom';

const removeBorrowProduct = async (borrowId) => {
    await fetch('http://localhost:3000/remove-borrow-products', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ borrowId: borrowId }),
    }).then((resp) => {
        resp.ok ? alert('Product removed successfully') : alert('Failed to remove the product');
        window.location.reload();
    });
};

const acceptBorrowProduct = async (borrowId) => {
    await fetch('http://localhost:3000/accept-borrow-product', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ borrowId: borrowId }),
    }).then((resp) => {
        resp.ok ? alert('Product accepted successfully') : alert('Failed to accept the product');
        window.location.reload(); // Reload page to reflect changes
    });
};

const updateReturnStatus = async (borrowId, status) => {
    await fetch('http://localhost:3000/update-return-status', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ borrowId: borrowId, status: status }),
    }).then((resp) => {
        resp.ok ? alert(`Product marked as ${status} successfully`) : alert(`Failed to mark product as ${status}`);
        window.location.reload(); // Reload page to reflect changes
    });
};

const formatDate = (dateString) => {
    if (!dateString) return 'Ongoing';
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear().toString().slice(-2);
    return `${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}-${year}`;
};


const borrowProductTable = ({ products }) => {
    return (
        <div className="conn">
            <div className="inventory-container">
                <div className="inventory-heading">
                    <h3>Borrowed History</h3>
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
                            <th className="title">Role</th>
                            <th className="title">Borrower's Name</th>
                            <th className="title">Borrower's Gmail</th>
                            <th className="title">Borrower's Number</th>
                            <th className="title">Status</th>
                            <th className="title">Accept</th>
                            <th className="title">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((item, index) => (
                            <tr key={index}>
                                <td className="data">{item.borrowId}</td>
                                <td className="data">{item.borrowName}</td>
                                <td className="data">{item.borrowQuantity}</td>
                                <td className="data">{formatDate(item.borrowDate)}</td>
                                <td className="data">{item.purpose}</td>
                                <td className="data">{item.destination}</td>
                                <td className="data">{item.clientStaff}</td>
                                <td className="data">{item.borrowerName}</td>
                                <td className="data">{item.borrowerGmail}</td>
                                <td className="data">{item.borrowerNumber}</td>
                                <td className="data">{item.isAccepted ? (item.isReturn || "Ongoing") : "Pending"}</td>
                                <td className="data">
                                    {!item.isAccepted && (
                                        <>
                                            <button onClick={() => acceptBorrowProduct(item.borrowId)}  className="accept-button">Accept</button>
                                        </>
                                    )}
                                    {item.isAccepted && !item.isReturn && (
                                        <>
                                            <button onClick={() => updateReturnStatus(item.borrowId, 'Good')}>Good</button>
                                            <button onClick={() => updateReturnStatus(item.borrowId, 'Damaged')}>Damaged</button>
                                        </>
                                    )}
                                </td>
                                <td className="data">
                                    {!item.isAccepted && (
                                        <>
                                            <button onClick={() => removeBorrowProduct(item.borrowId)} className="delete">Delete</button>
                                        </>
                                    )}
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