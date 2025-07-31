// routes/authRoutes.js
const express = require('express');
const { loginUser } = require('../controllers/authControllers');
const { body } = require('express-validator');
const validateRequest = require('../middleware/validateRequest');

const router = express.Router();

// POST /api/login
router.post(
  '/login', 
  [
    body('email').isEmail().withMessage('Enter a valid email'),
    body('password').notEmpty().withMessage('Password is required')
  ],
  validateRequest,       
  loginUser             
);

// POST /api/signup
router.post(
  '/signup',
  [
    body('email').isEmail().withMessage('Enter a valid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
  ],
  validateRequest,
  signupUser
);

module.exports = router;
