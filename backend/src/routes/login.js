import express from 'express';
import cors from 'cors'
import login from '../controllers/login.js';

const router = express.Router();
router.cors(cors())

router.post('/login', login); // Route for user registration

export default router;
