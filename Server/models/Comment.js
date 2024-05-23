const mongoose = require('mongoose');

const {Schema , model} = mongoose;

const commentSchema = new Schema({
    userId : {
        type : String ,
        required : true
    } ,
    videoId : {
        type : String ,
        required : true,
    } ,
    desc : {
        type : String ,
        required : true
    }
})

const Comment = model('comment' , commentSchema);

module.exports = Comment;