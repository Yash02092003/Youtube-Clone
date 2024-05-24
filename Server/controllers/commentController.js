const Comment = require("../models/Comment");
const Video = require("../models/Video");

const addComment = async(req , res , next) => {
    try{
        const newComment = new Comment({
            ...req.body ,
            userId : req.user.id
        });
        const savedComment = await newComment.save();
        res.status(200).json('Commented Successfully');
    }
    catch(e){
        next(e);
    }
}



const deleteComment = async(req , res , next) => {
    try{
        const comment = await Comment.findById(res.params.id);
        const video = await Video.findById(comment.videoId);
        if(req.user.id === comment.userId || req.user.id === video.userId){
            await Comment.findByIdAndDelete(req.params.id);
            res.status(200).json("The Comment Has been Deleted");
        }
        else{
            return next(new Error("You can delete only your comment"));
        }
    }
    catch(e){
        next(e);
    }
}


const getComments = async (req , res , next) => {
    try{
        const comments = await Comment.find({videoId : req.params.videoId});
        res.status(200).json(comments);
    }
    catch(e){
        next(e);
    }
}


module.exports = {addComment , deleteComment , getComments}