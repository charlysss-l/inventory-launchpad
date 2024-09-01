import React, { useState, useEffect } from 'react';
import './AdminNotifications.css';

const AdminNotifications = () => {
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
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
    }, []);

    const handleMarkAsRead = (notificationId) => {
        fetch(`http://localhost:3000/admin/notifications/${notificationId}/markAsRead`, {
            method: 'PUT',
        })
            .then((response) => response.json())
            .then((updatedNotification) => {
                console.log('Notification marked as read:', updatedNotification);
                setNotifications((prevNotifications) =>
                    prevNotifications.map((notif) =>
                        notif._id === notificationId ? { ...notif, isRead: true } : notif
                    )
                );
            })
            .catch((error) => {
                console.error('Error marking as read:', error);
            });
    };

    return (
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
    );
};

export default AdminNotifications;


// import React, { useState, useEffect } from 'react';
// import './AdminNotifications.css'; // Ensure you have corresponding CSS

// const AdminNotifications = () => {
//     const [notifications, setNotifications] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [showNotifications, setShowNotifications] = useState(false);

//     useEffect(() => {
//         console.log('Fetching notifications...');
//         fetch('http://localhost:3000/admin/notifications')
//             .then((response) => response.json())
//             .then((data) => {
//                 console.log('Fetched notifications:', data);
//                 setNotifications(data);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.error('Error fetching notifications:', error);
//                 setLoading(false);
//             });
//     }, []);

//     const handleToggleNotifications = () => {
//         setShowNotifications(!showNotifications);
//     };

//     const handleMarkAsRead = (notificationId) => {
//         fetch(`http://localhost:3000/admin/notifications/${notificationId}/markAsRead`, {
//             method: 'PUT',
//         })
//             .then((response) => response.json())
//             .then((updatedNotification) => {
//                 console.log('Notification marked as read:', updatedNotification);
//                 setNotifications((prevNotifications) =>
//                     prevNotifications.map((notif) =>
//                         notif._id === notificationId ? { ...notif, isRead: true } : notif
//                     )
//                 );
//             })
//             .catch((error) => {
//                 console.error('Error marking as read:', error);
//             });
//     };

//     return (
//         <div className="notification-container">
//             <button onClick={handleToggleNotifications}>
//                 Notifications ({notifications.filter((n) => !n.isRead).length})
//             </button>
//             {showNotifications && (
//                 <div className="notification-popup">
//                     {loading ? (
//                         <div>Loading...</div>
//                     ) : (
//                         <ul>
//                             {notifications.map((notification) => (
//                                 <li key={notification._id} className={notification.isRead ? 'read' : 'unread'}>
//                                     {notification.message}
//                                     {!notification.isRead && (
//                                         <button onClick={() => handleMarkAsRead(notification._id)}>Mark as Read</button>
//                                     )}
//                                 </li>
//                             ))}
//                         </ul>
//                     )}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AdminNotifications;
