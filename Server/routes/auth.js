const express = require('express');
const router = express.Router();
const { signup, signin } = require('../controllers/authController');

// Create A User
router.post('/signup' , signup);


// SIGN IN
router.post('/signin' , signin)



// GOOGLE AUTH






module.exports = router;