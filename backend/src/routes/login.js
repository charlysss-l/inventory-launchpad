import express from 'express';
import cors from 'cors'
import Login from '../controllers/login.js';
import {refreshToken} from '../controllers/login.js';

const router = express.Router();
router.use(cors())

router.post('/login', Login); // Route for user registration
router.post('/refresh-token', refreshToken);

export default router;
