import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Table.css';
import { Pagination } from '@mui/material'; // Import MUI Pagination

const Table = ({ products }) => {
    const [sortedProducts, setSortedProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); // State for current page
    const [productsPerPage] = useState(5); // Products per page

    useEffect(() => {
        // Sort products by date purchased (newest first)
        const sorted = [...products].sort((a, b) => new Date(b.product_datePurchased) - new Date(a.product_datePurchased));
        setSortedProducts(sorted);
    }, [products]);

    // Get current products for pagination
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const formatDate = (dateString) => {
        if (!dateString) return 'Ongoing';
        const date = new Date(dateString);
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear().toString().slice(-2);
        return `${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}-${year}`;
    };

    return (
        <div className="conn">
            <div className="inventory-container">
                <div className="inventory-heading">
                    <h3>Borrow</h3>
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
                            <th className="title">Borrow</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentProducts.map((item, index) => (
                            <tr key={index}>
                                <td className="data">{item.product_id}</td>
                                <td className="data">{item.product_name}</td>
                                <td className="data">{item.product_brand}</td>
                                <td className="data number-hover">{item.product_quantity}</td>
                                <td className="data">{item.product_category}</td>
                                <td className="data">{formatDate(item.product_datePurchased)}</td>
                                <td>
                                    <NavLink to={`/addBorrowProduct/${item.product_id}`} className="borrow-button">Borrow</NavLink>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <Pagination
                    count={Math.ceil(sortedProducts.length / productsPerPage)}
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

export default Table;


// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import './Table.css';

// const Table = ({ products }) => {
//     return (
//         <div className="conn">
//             <div className="inventory-container">
//                 <div className="inventory-heading">
//                     <h3>Borrow</h3>
//                 </div>

//                 <table className="inventory-table">
//                     <thead>
//                         <tr>
//                             <th className="title">Product_ID</th>
//                             <th className="title">Name</th>
//                             <th className="title">Brand</th>
//                             <th className="title">Quantity</th>
//                             <th className="title">Category</th>
//                             <th className="title">Date Purchased</th>
//                             <th className="title">Borrow</th>
//                         </tr>
//                     </thead>
//                     <tbody >
//                         {products.map((item, index) => (
//                             <tr key={index}>
//                                 <td className="data">{item.product_id}</td>
//                                 <td className="data">{item.product_name}</td>
//                                 <td className="data">{item.product_brand}</td>
//                                 <td className="data">{item.product_quantity}</td>
//                                 <td className="data">{item.product_category}</td>
//                                 <td className="data">{item.product_datePurchased}</td>
//                                 <td>
//                                     <NavLink to={`/addBorrowProduct/${item.product_id}`} className="borrow-button">Borrow</NavLink>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default Table;


