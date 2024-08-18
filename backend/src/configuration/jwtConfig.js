import crypto from 'crypto';

// Generate a random secret key
export const secretKey = crypto.randomBytes(10).toString('hex');

// export default { secretKey };