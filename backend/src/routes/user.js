import express from 'express'
import cors from 'cors'
import userController from '../controllers/user.js'
import authenticateToken from '../utils/authMiddleware.js'

const router = express.Router()

router.use(cors())

router.get('/users', authenticateToken ,userController.getUsers);


export default router