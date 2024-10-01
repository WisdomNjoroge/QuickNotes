import express from 'express';
import { body } from 'express-validator';
import { login, signup } from '../controllers/authController.js';


const router = express.Router();


// The signUp route

router.post(
    '/signup',
    [
        body('username').isLength({ min: 3 }),
        body('email').isEmail(),
        body('password').isLength({ min: 6 }),
    ],
    signup
);

// The login route
router.post(
    '/login',
    [
        body('email').isEmail(),
        body('password').notEmpty(),
    ],
    login
);

export default router;