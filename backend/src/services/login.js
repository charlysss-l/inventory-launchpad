import bcrypt from 'bcrypt'
import User from '../models/user'
import { generateToken } from '../utils/jwtUtils'

export const login = async () => {
    try {
        const existingUser = await User.findOne({email})
        if(!existingUser){
            throw new Error('user not found')
        }
        const isPasswordValid = bcrypt.compare(password, existingUser.password)
        if(!isPasswordValid){
            throw new Error('incorrect password')
        }
        const token = generateToken(existingUser)
        return token
    } catch (error) {
        throw new Error('invalid credentials')
    }
}

// export default {login}