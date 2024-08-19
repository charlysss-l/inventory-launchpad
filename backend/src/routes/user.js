import express from 'express'
import cors from 'cors'
import userController from '../controllers/user.js'
import authMiddleware from '../utils/authMiddleware.js'

const router = express.Router()

router.use(cors())

router.get('/users', authMiddleware.authenticateToken, userController.getUsers)

export default router