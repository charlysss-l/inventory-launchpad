import bcrypt from 'bcrypt';
import User from '../models/user.js'; // Ensure correct import
import { generatedToken } from '../utils/jwtUtils.js'; // Ensure correct import

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

export default loGin; // Export loGin function