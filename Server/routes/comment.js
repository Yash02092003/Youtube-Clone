const express = require('express');
const router = express.Router();
const { addComment, deleteComment, getComments } = require('../controllers/commentController');
const verifyToken = require('../verifyToke');


router.post("/api/commment/new" , verifyToken , addComment);


router.delete('/api/comment/:id/delete' , verifyToken , deleteComment);


router.get('/api/comments' , getComments);










module.exports = router;