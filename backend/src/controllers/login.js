import loGin from '../services/login.js'; // Correct import statement

const Login = async (req, res) => {
    try {
        const { email, password } = req.body; // Destructure email and password from request body
        const token = await loGin(email, password); // Pass email and password to loGin
        res.json({ token: token }); // Send token in the response
    } catch (error) {
        res.status(401).json({ message: "Invalid credentials" }); // Return error message
    }
};

export const refreshToken = async (req, res) => {
    try {
        const { token } = req.body; // Destructure email and password from request body
        const newToken = await refreshToken(token); // Pass email and password to loGin
        res.json({ newToken: newToken }); // Send token in the response
    } catch (error) {
        res.status(401).json({ message: "Invalid credentials" }); // Return error message
    }
};

export default Login;