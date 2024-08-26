import React, { useState, useEffect, useCallback } from 'react';
import './productTable.css';
import { NavLink, useParams } from 'react-router-dom';

const removeProduct = async (product_id) => {
    try {
        const response = await fetch('http://localhost:3000/removeproduct', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ product_id: product_id })
        });
        
        if (!response.ok) {
            throw new Error('Failed to remove the product');
        }
        
        alert('Product removed successfully.');
    } catch (error) {
        alert(error.message);
    }
};

const CategoryTable = () => {
    const { category } = useParams(); // Get category from the URL
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true); // Start loading
                const response = await fetch(`http://localhost:3000/prodCat/${category}`);
                
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                
                const data = await response.json();
                setFilteredProducts(data); // Update state with fetched products
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false); // End loading
            }
        };

        fetchProducts();
    }, [category]); // Dependency on category

    const handleRemoveProduct = useCallback(async (product_id) => {
        await removeProduct(product_id);
        // Fetch products again after removing one to update the list
        const fetchProducts = async () => {
            try {
                setLoading(true); // Start loading
                const response = await fetch(`http://localhost:3000/prodCat/${category}`);
                
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                
                const data = await response.json();
                setFilteredProducts(data); // Update state with fetched products
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false); // End loading
            }
        };

        fetchProducts();
    }, [category]);

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
                                <tr key={item.product_id}>
                                    <td className="data">{item.product_id}</td>
                                    <td className="data">{item.product_name}</td>
                                    <td className="data">{item.product_brand}</td>
                                    <td className="data">{item.product_quantity}</td>
                                    <td className="data">{item.product_category}</td>
                                    <td className="data">{item.product_datePurchased}</td>
                                    <td className="data">
                                        <NavLink to={`/admin/editProduct/${item.product_id}`} className="edit">Edit</NavLink>
                                    </td>
                                    <td className="data">
                                        <button type="button" onClick={() => handleRemoveProduct(item.product_id)} className="delete">Delete</button>
                                    </td>
                                    <td className="data">
                                        <NavLink to={`/admin/addBorrowProduct/${item.product_id}`} className="borrow">Borrow</NavLink>
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
