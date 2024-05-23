const { required } = require('joi');
const mongoose = require('mongoose');

const {Schema , model} = mongoose;

const VideoSchema = new Schema({
    userId : {
        type : String ,
        required : true
    } ,
    desc : {
        type : String ,
        required : true
    } ,
    imgURL : {
        type : String ,
        required : true
    } ,
    videoURL : {
        type : String ,
        required : true
    } ,
    views : {
        type : Number ,
        default : 0
    } ,
    tags : {
        type : [String],
        default : []
    } ,
    likes : {
        type : [String],
        default : []
    } ,
    dislikes : {
        type : [String] ,
        default : []
    }
} , {timestamps : true});

const Video = model('video' , VideoSchema);

module.exports = Video