import authService from '../services/login'

export const login = async (req,res) => {
    try {
        const {email,password} = req.body
        const token = await authService.login(email, password)
        res.json({token: token})
    } catch (error) {
        res.status(401).json({message: "Invalid credentials"})
    }
}

// export default {login}
