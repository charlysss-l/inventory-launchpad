import mongoose from "mongoose";

export const Notification = mongoose.model('Notification',{
    message: {
        type: String,
        required: true,
    },
    isRead: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});


// Fetch all notifications
export const fetchNotifs = async (req, res) => {
    try {
        const notifications = await Notification.find().sort({ createdAt: -1 });
        res.status(200).json(notifications);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching notifications', error });
    }
}

// Mark notification as read
export const markNotifs = async (req, res) => {
    const { id } = req.params;
    try {
        const notification = await Notification.findByIdAndUpdate(id, { isRead: true }, { new: true });
        res.status(200).json(notification);
    } catch (error) {
        res.status(500).json({ message: 'Error updating notification', error });
    }
}

// Remove a notification
export const removeNotification = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedNotification = await Notification.findByIdAndDelete(id);
        if (deletedNotification) {
            res.status(200).json({
                success: true,
                message: 'Notification successfully removed',
                id: id,
            });
        } else {
            res.status(404).json({
                success: false,
                message: 'Notification not found',
            });
        }
    } catch (error) {
        console.error("Error removing notification:", error);
        res.status(500).json({
            success: false,
            message: 'Failed to remove notification due to a server error',
        });
    }
}

// export const fetchNotifs = async (req, res) => {
//     try {
//         const notifications = await Notification.find().sort({ createdAt: -1 });
//         res.status(200).json(notifications);
//     } catch (error) {
//         res.status(500).json({ message: 'Error fetching notifications', error });
//     }
// }

// export const markNotifs = async (req, res) => {
//     const { id } = req.params;
//     try {
//         const notification = await Notification.findByIdAndUpdate(id, { isRead: true }, { new: true });
//         res.status(200).json(notification);
//     } catch (error) {
//         res.status(500).json({ message: 'Error updating notification', error });
//     }
// }

// export const removeNotification = async (req, res) => {
//     const { id } = req.params;
//     try {
//         const deletedNotification = await Notification.findByIdAndDelete(id);
//         if (deletedNotification) {
//             res.status(200).json({
//                 success: true,
//                 message: 'Notification successfully removed',
//                 id: id,
//             });
//         } else {
//             res.status(404).json({
//                 success: false,
//                 message: 'Notification not found',
//             });
//         }
//     } catch (error) {
//         console.error("Error removing notification:", error);
//         res.status(500).json({
//             success: false,
//             message: 'Failed to remove notification due to a server error',
//         });
//     }
// };