import User from '../models/user.js';

const getUsers = async () => {
    const users = await User.find({});
    return users; // Return the list of users
};

export default { getUsers }; // Ensure you're exporting an object with getUsers

// import User from '../models/user.js';

// const getUsers = async () => {
//     const user = await User.find({})
//     return user
// }

// export default {getUsers}