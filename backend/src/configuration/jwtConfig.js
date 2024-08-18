import crypto from 'crypto';

// Generate a random secret key
const secretKey = crypto.randomBytes(10).toString('hex');

export default { secretKey };