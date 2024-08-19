import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true }, // Ensure email is unique
    password: String,
    role: {
        type: String,
        enum: ["admin", "customer"],
        default: 'customer'
    }
});

export default mongoose.model('User', userSchema); // Export the User model