import jwt from 'jsonwebtoken';
import { secretKey } from '../configuration/jwtConfig.js'; // Ensure the correct import

export const generatedToken = (user) => {
    const payload = {
        id: user._id,
        email: user.email,
        role: user.role,
    };

    // Sign the token with the secret key and set expiration
    return jwt.sign(payload, secretKey, { expiresIn: '1h' });
};

export default { generatedToken }; // Uncomment if you want to export this as a default