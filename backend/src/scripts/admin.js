import User from '../models/user.js';
import bcrypt from 'bcryptjs'

const createAdminAccount = async () => {
    try {
        const existingAdmin = await User.findOne({email:'admintest@gmail.com'})
        if(!existingAdmin){
            const newAdmin = new User({
                email: 'admintest@gmail.com',
                name:'Admin',
                password: await bcrypt.hash('admin', 10),
                role: 'admin'
            })
            await newAdmin.save()
            console.log('admin account created')
        }else{
            console.log("Admin already exist")
        }
    } catch (error) {
        console.log(error)
    }
}


export default createAdminAccount