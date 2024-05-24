const User = require('../models/User');
const Video = require('../models/Video')
const addVideo = async(req , res , next) => {
    const newVideo = new Video({
        userId : req.user.id ,
        ...req.body
    });
    try{
        await newVideo.save();
        res.status(200).json('Video Created Successfully');
    }
    catch(e){
        next(e)
    }
}

const updateVideo = async(req , res , next) => {
    const video = await Video.findById(req.params.id);
    try{
        if(req.user.id === video.userId){
            const updateVideo = await Video.findByIdAndUpdate(req.params.id , {
                $set : req.body
            } , {new : true});
            return res.status(200).json(updateVideo);
        }
        else{
            return next(new Error('You Can Only Update Your video'));
        }
       
    }
    catch(e){
        next(e);
    }
}

const deleteVideo = async(req , res , next) => {
    const video = await Video.findById(req.params.id);
    try{
        if(req.user.id === video.userId){
            await Video.findByIdAndDelete(req.params.id);
            res.status(200).json('video deleted Successfully');
        }
        else{
            return next(new Error('You can only Delete Your video'));
        }
    }
    catch(e){
        next(e);
    }
}

const getVideo = async(req , res , next) => {
    try{
        const video = await Video.findById(req.params.id);
        res.status(200).json(video);
    }
    catch(e){
        next(e);
    }
}

const addView = async(req , res , next) => {
    try{
        await Video.findByIdAndUpdate(req.params.id , {
            $inc : {views : 1}
        })
        res.status(200).json('Views Has Been updated');
    }
    catch(e){
        next(e);
    }
}

const random = async (req , res , next) => {
    try{
        const video = await Video.aggregate([{ $sample : {size : 40} }]);
        console.log('Hello');
        res.status(200).json(video);
    }
    catch(e){
        next(e);
    }
}

const trend = async (req , res , next) => {
    try{
        const videos = await Video.find({}).sort({views : -1});
        res.status(200).json(videos);
    }
    catch(e){
        next(e);
    }
}

const sub = async (req , res , next) => {
    try{
        const user = await User.findById(req.user.id);
        const subs = user.subscribedChannels;
        const list = await Promise.all(
            subs.map(channelId => {
                return Video.find({userId : channelId});
            })
        )

        res.status(200).json(list.flat().sort((a , b) => b.createdAt - a.createdAt));
    }
    catch(e){
        next(e);
    }
}

const getByTag = async (req , res , next) => {
    const tags = req.query.tags.split(",");
    try{
        const videos = await Video.find({tags : {$in : tags}}).limit(20);
        res.status(200).json(videos)
    }
    catch(e){
        next(e);
    }
}
const search = async (req , res , next) => {
    const query = req.query.q
    try{
        const videos = await Video.find({title : {$regex : query , $options : "i"}}).limit(200);
        res.status(200).json(videos);
    }
    catch(e){
        next(e);
    }
}

module.exports ={addVideo , updateVideo , deleteVideo , getVideo , addView , trend , random , sub , getByTag , search};