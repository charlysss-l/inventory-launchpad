import { createUser } from '../services/signup.js';

const createUserr = async (req, res) => {
  try {
    const userData = req.body;
    console.log('Request body:', userData); // Logging the request body
    const user = await createUser(userData);
    res.status(201).json({
      user: user,
      mssg: 'User created successfully'
    });
  } catch (error) {
    console.error('Error occurred:', error); // Detailed error logging
    res.status(400).json({
      mssg: error.message || 'An error occurred during user creation'
    });
  }
};

export default createUserr;
