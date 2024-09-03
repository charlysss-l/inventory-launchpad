import React, { useState, useEffect } from 'react';
import './AdminDashboard.css'; // Make sure to create this CSS file for styling


const AdminDashboard = () => {
    const [totalProducts, setTotalProducts] = useState(0);
    const [totalInventory, setTotalInventory] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch total number of products
        fetch('http://localhost:3000/totalProducts')
            .then((resp) => resp.json())
            .then((data) => {
                setTotalProducts(data.totalProducts);
            })
            .catch((error) => {
                console.error('Error fetching total products:', error);
            });

        // Fetch total inventory count
        fetch('http://localhost:3000/totalInventory')
            .then((resp) => resp.json())
            .then((data) => {
                setTotalInventory(data.totalInventory);
            })
            .catch((error) => {
                console.error('Error fetching total inventory:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className="dashboard-stats">
                    <div className="stat-card">
                        <h2>Total Products</h2>
                        <p>{totalProducts}</p>
                    </div>
                    <div className="stat-card">
                        <h2>Total Inventory</h2>
                        <p>{totalInventory}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;