// const express = require('express')
// const signupController = require('../constrollers/signup')
import express from 'express';
import createUserr from '../controllers/signup.js';

const router = express.Router();

router.post('/register', createUserr); // Route for user registration

export default router;
