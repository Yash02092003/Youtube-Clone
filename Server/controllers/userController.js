const User = require("../models/User");

const update = async (req , res , next) => {
    if(req.params.id === req.user._id){
        const updateUser = await User.findByIdAndUpdate(req.params.id , {
            $set : req.body
        } ,{new : true})
    }else{
        return next(new Error('You Can Update Only Your Account'));
    }
}



module.exports = { update }