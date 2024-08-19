import express from 'express';
import cors from 'cors'
import Login from '../controllers/login.js';

const router = express.Router();
router.use(cors())

router.post('/login', Login); // Route for user registration

export default router;
