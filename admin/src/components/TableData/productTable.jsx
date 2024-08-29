import React, { useState, useEffect } from 'react';
import './productTable.css';
import { NavLink } from 'react-router-dom';
import { Pagination } from '@mui/material';

const removeProduct = async (product_id) => {
    await fetch('http://localhost:3000/removeproduct', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ product_id: product_id }),
    }).then((resp) => {
        // resp.ok ? confirm('Are you sure you want to remove the product?') : alert('Failed to remove the product');
        if (resp.ok) {
            const userResponse = prompt('Type "yes" to confirm product removal:').toLowerCase();
            if (userResponse === 'yes') {
                alert('Product removed successfully.');
            } else {
                alert('Product removal canceled.');
            }
        } else {
            alert('Failed to remove the product');
        }
    });
};

const productTable = ({ products }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(5);
    const [sortedProducts, setSortedProducts] = useState([]);

    // Sort products by purchase date (newest first)
    useEffect(() => {
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
                            <th className="title">Price</th>
                            <th className="title">Total Price</th>
                            <th className="title">Supplier</th>
                            <th className="title">Update</th>
                            <th className="title">Delete</th>
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
                                <td className="data">{item.product_datePurchased}</td>
                                <td className="data">{item.product_price}</td>
                                <td className="data">{item.product_totalPrice}</td>
                                <td className="data">{item.product_supplier}</td>
                                <td className="data">
                                    <NavLink to={`/admin/editProduct/${item.product_id}`} className="editprod">Edit</NavLink>
                                </td>
                                <td className="data">
                                    <button type="submit" onClick={() => { removeProduct(item.product_id); }} className="delete">Delete</button>
                                </td>
                                <td className="data">
                                    <NavLink to={`/admin/addBorrowProduct/${item.product_id}`} className="borrow-button">Borrow</NavLink>
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

export default productTable;


// import './productTable.css'
// import { NavLink } from 'react-router-dom';
// const removeProduct = async (product_id) => {
//     await fetch('http://localhost:3000/removeproduct', {
//         method: 'POST',
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({product_id:product_id})
        
//     }).then((resp)=> {
//         resp.ok? alert('Are you sure you want to remove the product?') : alert("Failed to remove the product")
//     })
// }
//     const productTable = ({ products }) => {
//         return (
//             <div className="conn">
//   <div className="inventory-container">

//         <div className="inventory-heading">
//             <h3>Products</h3>
//             <NavLink to={'/admin/addProduct'} className="pages">Add Product</NavLink>
//         </div>
//             <table className="inventory-table">
//                     <thead>
//                         <tr>
//                             <th className="title">Product_ID</th>
//                             <th className="title">Name</th>
//                             <th className="title">Brand</th>
//                             <th className="title">Quantity</th>
//                             <th className="title">Category</th>
//                             <th className="title">Date Purchased</th>
//                             <th className="title">Update</th>
//                             <th className="title">Delete</th>
//                             <th className="title">Borrow</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {products.map((item, index) => (
//                             <tr key={index}>
//                                 <td className="data">{item.product_id}</td>
//                                 <td className="data">{item.product_name}</td>
//                                 <td className="data">{item.product_brand}</td>
//                                 <td className="data">{item.product_quantity}</td>
//                                 <td className="data">{item.product_category}</td>
//                                 <td className="data">{item.product_datePurchased}</td>
//                                 <td className="data"><NavLink to={`/admin/editProduct/${item.product_id}`} className="editprod">Edit</NavLink></td>
//                                 <td className="data"><button type="submit" onClick={() => {removeProduct(item.product_id)}} className="delete">Delete</button></td>
//                                 <td>
//                                 <NavLink to={`/admin/addBorrowProduct/${item.product_id}`} className="borrow-button">Borrow</NavLink>   
//                                 </td>

//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
          
//         );
//     };
    
//     export default productTable;

