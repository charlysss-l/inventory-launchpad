import React, { useState, useEffect } from 'react';
import './AdminDashboard.css'; // Make sure to create this CSS file for styling


const AdminDashboard = () => {
    const [totalProducts, setTotalProducts] = useState(0);
    const [totalInventory, setTotalInventory] = useState(0);
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchNotifications = () => {
        console.log('Fetching notifications...');
        fetch('http://localhost:3000/admin/notifications')
            .then((response) => response.json())
            .then((data) => {
                console.log('Fetched notifications:', data);
                setNotifications(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching notifications:', error);
                setLoading(false);
            });
    };
    
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

            fetchNotifications();

        // Polling for new notifications every second
        const intervalId = setInterval(fetchNotifications, 1000);

        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    const handleMarkAsRead = (notificationId) => {
        fetch(`http://localhost:3000/admin/notifications/${notificationId}/markAsRead`, {
            method: 'PUT',
        })
            .then((response) => response.json())
            .then((updatedNotification) => {
                console.log('Notification marked as read:', updatedNotification);
                // Update the specific notification's "isRead" status in the state
                setNotifications((prevNotifications) =>
                    prevNotifications.map((notif) =>
                        notif._id === notificationId ? { ...notif, isRead: true } : notif
                    )
                );
                
                // Re-fetch notifications after 1 second
                setTimeout(fetchNotifications, 1000);
            })
            .catch((error) => {
                console.error('Error marking as read:', error);
            });
    };

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
                    <div className="notification-container">
            <h2>Admin Notifications</h2>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className="notification-popup">
                    <ul>
                        {notifications.map((notification) => (
                            <li key={notification._id} className={notification.isRead ? 'read' : 'unread'}>
                                {notification.message}
                                {!notification.isRead && (
                                    <button onClick={() => handleMarkAsRead(notification._id)}>Mark as Read</button>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;