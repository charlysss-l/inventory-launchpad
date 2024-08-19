import User from '../models/user.js';

const getUsers = async (req, res) => {
    console.log("getUsers called"); // Log when the function is called
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        console.error("Error retrieving users:", error);
        res.status(500).json({ message: error.message });
    }
};

export default { getUsers }; // Ensure you're exporting an object with getUsers

// import userService from '../services/user.js'

// const getUsers = async (req,res) => {
//     try {
//         const users = await userService.getUsers()
//         res.json(users)
//     } catch (error) {
//         res.status(500).json({message: error})
//     }
// }

// export default {getUsers}