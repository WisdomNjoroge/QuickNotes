import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';
import User from '../models/User.js';


// The signup property
export const signup = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {  username, email, password } = req.body;

    try {
        // A Hash Pwd
        const hashedPassword = await bcrypt.hash(password, 10);

        // Creating a new user
        const newUser = await User.create({ username, email, password: hashedPassword });
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ message: "Server ERROR", error: error.message });

    }
};

// The login property

export const login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        // Finding the User
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials!!' });
        }


        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials!!'});
        }

        // Creating a token
        const token = jwt.sign({ id: user.id, username: user.username }, 'my_jwt_secret', { expiresIn: '1h1' });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: "Server ERROR", error: error.message });

    }
};
