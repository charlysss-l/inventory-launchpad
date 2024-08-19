import bcrypt from 'bcrypt';
import User from '../models/user.js'; // Ensure correct import
import { generatedToken } from '../utils/jwtUtils.js'; // Ensure correct import
import { verifyToken } from '../utils/authMiddleware.js';

const loGin = async (email, password) => { // Accept email and password as parameters
    try {
        const existingUser = await User.findOne({ email }); // Find user by email
        if (!existingUser) {
            throw new Error('User not found'); // Throw error if user does not exist
        }
        
        // Compare the provided password with the hashed password in the database
        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordValid) {
            throw new Error('Incorrect password'); // Throw error if password is incorrect
        }
        
        const token = generatedToken(existingUser); // Generate token for the user
        return token; // Return the token
    } catch (error) {
        console.log('login error: ', error)
        throw new Error('Invalid credentials'); // Throw error if any issue occurs
    }
}

export const refreshToken = async (oldToken) => {
    try {
        const decodedToken = verifyToken(oldToken)
        const user = User.findById(decodedToken._id)
        if(!user){
            throw new error('user not ound')
        }
        const newToken = generatedToken(user)
        return newToken
    } catch (error) {
        throw new error("invalid token")
    }
}

export default loGin; // Export loGin function