import React, { useState, useEffect } from 'react';
import './productTable.css';
import { NavLink, useParams } from 'react-router-dom';

const removeProduct = async (product_id) => {
    await fetch('http://localhost:3000/removeproduct', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ product_id: product_id })
    }).then((resp) => {
        resp.ok ? alert('Product removed successfully.') : alert("Failed to remove the product");
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

const CategoryTable = () => {
    const { category } = useParams(); // Get category from the URL
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('Fetching category:', category); // Debugging output
        // Fetch products by category
        setLoading(true); // Start loading
        fetch(`http://localhost:3000/prodCat/${category}`)
            .then((resp) => {
                if (!resp.ok) {
                    throw new Error('Network response was not ok');
                }
                return resp.json();
            })
            .then((data) => {
                console.log('Fetched data:', data); // Debugging output
                setFilteredProducts(data); // Update state with fetched products
                setLoading(false); // End loading
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false); // End loading on error
            });
    }, [category]); // Dependency on category
    

    return (
        <div className="conn">
            <div className="inventory-container">
                <div className="inventory-heading">
                    <h3>Products</h3>
                    <NavLink to={'/admin/addProduct'} className="pages">Add Product</NavLink>
                </div>
                {loading ? (
                    <div>Loading...</div> // Display loading message
                ) : (
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
                                <th className="title">Borrow</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredProducts.map((item, index) => (
                                <tr key={index}>
                                    <td className="data">{item.product_id}</td>
                                    <td className="data">{item.product_name}</td>
                                    <td className="data">{item.product_brand}</td>
                                    <td className="data">{item.product_quantity}</td>
                                    <td className="data">{item.product_category}</td>
                                    <td className="data">{formatDate(item.product_datePurchased)}</td>
                                    <td className="data">
                                        <NavLink to={`/admin/editProduct/${item.product_id}`} className="editprod">Edit</NavLink>
                                    </td>
                                    <td className="data">
                                        <button type="button" onClick={() => { removeProduct(item.product_id) }} className="delete">Delete</button>
                                    </td>
                                    <td>
                                    <NavLink to={`/admin/addBorrowProduct/${item.product_id}`} className="borrow-button">Borrow</NavLink>   
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default CategoryTable;
