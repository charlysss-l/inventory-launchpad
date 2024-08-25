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

export const fetchNotifs = async (req, res) => {
    try {
        const notifications = await Notification.find().sort({ createdAt: -1 });
        res.status(200).json(notifications);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching notifications', error });
    }
}

export const markNotifs = async (req, res) => {
    const { id } = req.params;
    try {
        const notification = await Notification.findByIdAndUpdate(id, { isRead: true }, { new: true });
        res.status(200).json(notification);
    } catch (error) {
        res.status(500).json({ message: 'Error updating notification', error });
    }
}       