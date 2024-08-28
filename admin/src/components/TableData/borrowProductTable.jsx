import React, { useState, useEffect } from 'react';
import './productTable.css';
import { Pagination } from '@mui/material';

const removeBorrowProduct = async (borrowId) => {
    try {
        const response = await fetch('http://localhost:3000/remove-borrow-products', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ borrowId }),
        });
        if (response.ok) {
            alert('Product removed successfully');
            window.location.reload();
        } else {
            alert('Failed to remove the product');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to remove the product');
    }
};

const acceptBorrowProduct = async (borrowId) => {
    try {
        const response = await fetch('http://localhost:3000/accept-borrow-product', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ borrowId }),
        });
        if (response.ok) {
            alert('Product accepted successfully');
            window.location.reload();
        } else {
            alert('Failed to accept the product');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to accept the product');
    }
};

const updateReturnStatus = async (borrowId, status) => {
    try {
        const response = await fetch('http://localhost:3000/update-return-status', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ borrowId, status }),
        });
        if (response.ok) {
            alert(`Product marked as ${status} successfully`);
            window.location.reload();
        } else {
            alert(`Failed to mark product as ${status}`);
        }
    } catch (error) {
        console.error('Error:', error);
        alert(`Failed to mark product as ${status}`);
    }
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
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(5);
    const [sortedProducts, setSortedProducts] = useState([]);

    // Sort products by date (newest first)
    useEffect(() => {
        const sorted = [...products].sort((a, b) => new Date(b.borrowDate) - new Date(a.borrowDate));
        setSortedProducts(sorted);
    }, [products]); // Only run this effect when the `products` prop changes

    // Get current products for pagination
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

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
                            <th className="title">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentProducts.map((item, index) => (
                            <tr key={index}>
                                <td className="data">{item.borrowId}</td>
                                <td className="data">{item.borrowName}</td>
                                <td className="data number-hover">{item.borrowQuantity}</td>
                                <td className="data">{formatDate(item.borrowDate)}</td>
                                <td className="data">{item.purpose}</td>
                                <td className="data">{item.destination}</td>
                                <td className="data">{item.clientStaff}</td>
                                <td className="data">{item.borrowerName}</td>
                                <td className="data">{item.borrowerGmail}</td>
                                <td className="data number-hover">{item.borrowerNumber}</td>
                                <td className="data">{item.isAccepted ? (item.isReturn || "Ongoing") : "Pending"}</td>
                                <td className="data">
                                    {!item.isAccepted ? (
                                        <button onClick={() => acceptBorrowProduct(item.borrowId)} className="accept-button">Accept</button>
                                    ) : !item.isReturn ? (
                                        <>
                                            <button onClick={() => updateReturnStatus(item.borrowId, 'Good')} className="return-button">Good</button>
                                            <button onClick={() => updateReturnStatus(item.borrowId, 'Damaged')} className="return-button">Damaged</button>
                                        </>
                                    ) : (
                                        item.isReturn
                                    )}
                                </td>
                                <td className="data">
                                    {!item.isAccepted && (
                                        <button onClick={() => removeBorrowProduct(item.borrowId)} className="delete-button">Delete</button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination
                    count={Math.ceil(products.length / productsPerPage)}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                    variant="outlined"
                    shape="rounded"
                    style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
                />
            </div>
        </div>
    );
};

export default borrowProductTable;





// import './productTable.css';
// import { NavLink } from 'react-router-dom';

// const removeBorrowProduct = async (borrowId) => {
//     await fetch('http://localhost:3000/remove-borrow-products', {
//         method: 'POST',
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ borrowId: borrowId }),
//     }).then((resp) => {
//         resp.ok ? alert('Product removed successfully') : alert('Failed to remove the product');
//         window.location.reload();
//     });
// };

// const acceptBorrowProduct = async (borrowId) => {
//     await fetch('http://localhost:3000/accept-borrow-product', {
//         method: 'POST',
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ borrowId: borrowId }),
//     }).then((resp) => {
//         resp.ok ? alert('Product accepted successfully') : alert('Failed to accept the product');
//         window.location.reload(); // Reload page to reflect changes
//     });
// };

// const updateReturnStatus = async (borrowId, status) => {
//     await fetch('http://localhost:3000/update-return-status', {
//         method: 'POST',
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ borrowId: borrowId, status: status }),
//     }).then((resp) => {
//         resp.ok ? alert(Product marked as ${status} successfully) : alert(Failed to mark product as ${status});
//         window.location.reload(); // Reload page to reflect changes
//     });
// };

// const formatDate = (dateString) => {
//     if (!dateString) return 'Ongoing';
//     const date = new Date(dateString);
//     const month = date.getMonth() + 1;
//     const day = date.getDate();
//     const year = date.getFullYear().toString().slice(-2);
//     return ${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}-${year};
// };


// const borrowProductTable = ({ products }) => {
//     return (
//         <div className="conn">
//             <div className="inventory-container">
//                 <div className="inventory-heading">
//                     <h3>Borrowed History</h3>
//                 </div>
//                 <table className="inventory-table">
//                     <thead>
//                         <tr>
//                             <th className="title">Borrow ID</th>
//                             <th className="title">Item Name</th>
//                             <th className="title">Quantity</th>
//                             <th className="title">Date Borrowed</th>
//                             <th className="title">Purpose</th>
//                             <th className="title">Destination</th>
//                             <th className="title">Role</th>
//                             <th className="title">Borrower's Name</th>
//                             <th className="title">Borrower's Gmail</th>
//                             <th className="title">Borrower's Number</th>
//                             <th className="title">Status</th>
//                             <th className="title">Accept</th>
//                             <th className="title">Delete</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {products.map((item, index) => (
//                             <tr key={index}>
//                                 <td className="data">{item.borrowId}</td>
//                                 <td className="data">{item.borrowName}</td>
//                                 <td className="data">{item.borrowQuantity}</td>
//                                 <td className="data">{formatDate(item.borrowDate)}</td>
//                                 <td className="data">{item.purpose}</td>
//                                 <td className="data">{item.destination}</td>
//                                 <td className="data">{item.clientStaff}</td>
//                                 <td className="data">{item.borrowerName}</td>
//                                 <td className="data">{item.borrowerGmail}</td>
//                                 <td className="data">{item.borrowerNumber}</td>
//                                 <td className="data">{item.isAccepted ? (item.isReturn || "Ongoing") : "Pending"}</td>
//                                 <td className="data">
//                                     {!item.isAccepted && (
//                                         <>
//                                             <button onClick={() => acceptBorrowProduct(item.borrowId)}  className="accept-button">Accept</button>
//                                         </>
//                                     )}
//                                     {item.isAccepted && !item.isReturn && (
//                                         <>
//                                             <button onClick={() => updateReturnStatus(item.borrowId, 'Good')}>Good</button>
//                                             <button onClick={() => updateReturnStatus(item.borrowId, 'Damaged')}>Damaged</button>
//                                         </>
//                                     )}
//                                 </td>
//                                 <td className="data">
//                                     {!item.isAccepted && (
//                                         <>
//                                             <button onClick={() => removeBorrowProduct(item.borrowId)} className="delete">Delete</button>
//                                         </>
//                                     )}
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default borrowProductTable;

    
    {/* figure out pa if pagination or isang table nlng scroll scroll nlng */}
    {/* <div className="inventory-pagination">
    <button className="inventory-button">Previous</button>
    <span className="inventory-page-info">Page 1 of 10</span>
    <button className="inventory-button">Next</button>
    </div> */}