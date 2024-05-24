const express = require('express');
const router = express.Router();
const { signup, signin } = require('../controllers/authController');

// Create A User
router.post('/api/signup' , signup);


// SIGN IN
router.post('/api/signin' , signin)



// GOOGLE AUTH






module.exports = router;