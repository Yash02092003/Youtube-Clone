const express = require('express');
const router = express.Router();
const { update } = require('../controllers/userController');
const verifyToken = require('../verifyToke');


//update a user
router.put("/:id" , verifyToken , update)


// delete a user



// get a user


// subscribe a user


// unsubscribe a user


// like a video



// dislike a video


module.exports = router;