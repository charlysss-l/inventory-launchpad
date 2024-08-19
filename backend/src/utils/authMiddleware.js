

import jwt from 'jsonwebtoken'
import { secretKey } from '../configuration/jwtConfig.js';

const authenticateToken = (req, res, next) => {
    const authHeader = req.header('Authorization')
    if(!authHeader){
        return res.status(401).json({message: 'unauthorized: missing token'})
    }
    const [bearer, token] = authHeader.split(" ")
    if(bearer !== "Bearer" || !token){
        return res.status(401).json({message: "unauthorized: invalid token format"})
    }

    jwt.verify(token, secretKey, (err, user) => {
        if(err){
            return res.status(403).json({message: 'forbidden: invalid token'})
        }
    })
}

export default {authenticateToken}


// import jwt from 'jsonwebtoken';
// import { secretKey } from '../configuration/jwtConfig.js';

// const authenticateToken = (req, res, next) => {
//     const authHeader = req.header('Authorization');
//     if (!authHeader) {
//         return res.status(401).json({ message: 'Unauthorized: missing token' });
//     }
//     const [bearer, token] = authHeader.split(" ");
//     if (bearer !== "Bearer" || !token) {
//         return res.status(401).json({ message: "Unauthorized: invalid token format" });
//     }

//     jwt.verify(token, secretKey, (err, user) => {
//         if (err) {
//             return res.status(403).json({ message: 'Forbidden: invalid token' });
//         }
//         req.user = user; // Attach user info to the request object
//         next(); // Call next middleware or route handler
//     });
// };

// export default authenticateToken;