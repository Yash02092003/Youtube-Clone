const express = require('express');
const router = express.Router();
const { addVideo , deleteVideo , updateVideo , getVideo, addView, trend, sub , random} = require('../controllers/videoController');
const verifyToken = require('../verifyToke');
const validateObjectId = require('../validateObjectId');

router.post('/video/new' , verifyToken , addVideo);

router.get('/video/:id' , validateObjectId , getVideo);

router.delete('/video/:id' , verifyToken , validateObjectId , deleteVideo);

router.patch('/video/:id' , verifyToken , validateObjectId , updateVideo);

router.patch('/video/view/:id' ,validateObjectId , addView)

router.get('/videos/trend' , trend);

router.get('/videos/random' , random);

router.get('/videos/sub' , sub);


module.exports = router;