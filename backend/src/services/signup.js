// const User = require('../models/user')
// const bcrypt = require('bcrypt')

import bcrypt from 'bcrypt';
import User from '../models/user.js';

export const createUser = async (userData) => {
    const { name, email, password } = userData;
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password with bcrypt
    const createdUser = new User({
        name,
        email,
        password: hashedPassword, // Ensure this matches the schema field
        role: 'customer'
    });

    const savedUser = await createdUser.save(); // Save the user to the database
    return savedUser;
};
