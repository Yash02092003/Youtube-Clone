const User = require("../models/User");
const Video = require("../models/Video");

const update = async (req , res , next) => {
    if(req.params.id === req.user.id){
        try{
        const updateUser = await User.findByIdAndUpdate(req.params.id , {
            $set : req.body
        } ,{new : true})
        res.status(200).json(updateUser);
        }
        catch(e){
            next(e);
        }
    }else{
        return next(new Error('You Can Update Only Your Account'));
    }
}

const deleteUser = async (req , res , next) => {
    if(req.params.id === req.user._id){
        try{
        const deleteuser = await User.findByIdAndDelete(req.params.id);

        res.status(200).send({msg : "User Has Been Delete"});
        }
        catch(e){
            next(e);
        }
    }else{
        return next(new Error('You Can only delete Your Account'));
    }
}

const getUser = async (req , res , next) => {
    try{
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    }
    catch(e){
        next(e);
    }
}

const subscribeUser = async (req , res , next) => {
    try{
        await User.findByIdAndUpdate(req.user.id , {
            $push : {subscribedUser : req.params.id}
        })
        await User.findByIdAndUpdate(req.params.id , {
            $inc : {subscribers : 1}
        } , {new : true});
        res.status(200).json({msg : "Subscription Successful"});
    }
    catch(e){
        next(e);
    }
}

const unSubscribeUser = async(req , res , next) => {
    try{
        await User.findByIdAndUpdate(req.user.id , {
            $pull : {subscribedUser : req.params.id}
        });

        await User.findByIdAndUpdate(req.params.id , {
            $inc : {subscribers : -1}
        })

        res.status(200).json({msg : "Unsubscription Successfull"})
    }
    catch(e){
        next(e);
    }
}

const like = async (req , res , next) => {
    const id = req.user.id;
    const videoId = req.params.videoId;
    try{
        await Video.findByIdAndUpdate(videoId , {
            $addToSet : {likes : id} ,
            $pull : {dislikes : id}
        })
        res.status(200).json('The video has been liked');
    }
    catch(e){
        next(e);
    }
}

const dislike = async (req , res , next) => {
    const id = req.user.id;
    const video = req.params.videoId;
    try{
        await Video.findByIdAndUpdate(video , {
            $addToSet : {likes : id} ,
            $pull : {dislikes : id}
        })
        res.status(200).json("The video has been disliked");
    }
    catch(e){
        next(e)
    }
}


module.exports = { update , deleteUser , getUser , subscribeUser , unSubscribeUser , like , dislike};