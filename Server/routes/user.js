const express = require('express');
const router = express.Router();
const { update, deleteUser, getUser, subscribeUser, unSubscribeUser, like, dislike } = require('../controllers/userController');
const verifyToken = require('../verifyToke');
const { sub } = require('../controllers/videoController');
const { unsubscribe } = require('./video');


//update a user
router.patch("/api/users/:id" , verifyToken , update);


// delete a user
router.delete("/api/users/:id" , verifyToken , deleteUser);


// get a user
router.get("/api/users/:id" , getUser);

// subscribe a user
router.put("/api/user/sub/:id" , verifyToken , subscribeUser);


// unsubscribe a user
router.put("/api/user/unsub/:id" , verifyToken , unSubscribeUser);


// like a video
router.put("/api/like/:videoId" , verifyToken , like);


// dislike a video
router.put("/api/dislike/:videoId" , verifyToken , dislike);


module.exports = router;