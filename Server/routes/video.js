const express = require('express');
const router = express.Router();
const { addVideo , deleteVideo , updateVideo , getVideo, addView, trend, sub , random, getByTag, search} = require('../controllers/videoController');
const verifyToken = require('../verifyToke');
const validateObjectId = require('../validateObjectId');

router.post('/api/video/new' , verifyToken , addVideo);

router.get('/api/video/:id' , validateObjectId , getVideo);

router.delete('/api/video/:id' , verifyToken , validateObjectId , deleteVideo);

router.patch('/api/video/:id' , verifyToken , validateObjectId , updateVideo);

router.patch('/api/video/view/:id' ,validateObjectId , addView)

router.get('/api/videos/trend' , trend);

router.get('/api/videos/random' , random);

router.get('/api/videos/sub' , sub);

router.get('/api/videos/tags' , getByTag);

router.get('/api/videos/title' , search);


module.exports = router;