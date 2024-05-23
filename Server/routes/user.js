const express = require('express');
const router = express.Router();
const { update, deleteUser, getUser } = require('../controllers/userController');
const verifyToken = require('../verifyToke');


//update a user
router.patch("/users/:id" , verifyToken , update);


// delete a user
router.delete("/users/:id" , verifyToken , deleteUser);


// get a user
router.get("/users/:id" , getUser);

// subscribe a user



// unsubscribe a user


// like a video



// dislike a video


module.exports = router;