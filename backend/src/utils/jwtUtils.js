import jwt from 'jsonwebtoken'
import { createSecretKey } from '../configuration/jwtConfig'

const generatedToken = (user) => {
    const payload = {
        id: user._id,
        email: user.email,
        role: user.role
    }
    return jwt.sign(payload, this.createSecretKey, {expiresIn: '1h'})
}

export default generatedToken