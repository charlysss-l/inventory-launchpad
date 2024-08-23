import React, { useState, useEffect } from 'react';
import './Table.css';
import { NavLink, useParams } from 'react-router-dom';

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
                                    <td className="data">{item.product_datePurchased}</td>
                                    <td className="data">
                                        <NavLink to={`/addBorrowProduct/${item.product_id}`}>
                                            <button>Borrow</button>
                                        </NavLink>
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
