import crypto from 'crypto';

// Generate a random secret key (you may want to store this securely)
export const secretKey = crypto.randomBytes(32).toString('hex'); // Increased key size for better security

// Alternatively, you can load the secret key from environment variables for production
// export const secretKey = process.env.JWT_SECRET || 'your-default-secret-key';



// import crypto from 'crypto';

// // Generate a random secret key
// export const secretKey = crypto.randomBytes(10).toString('hex');

// // export default { secretKey };