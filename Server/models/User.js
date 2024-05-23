const mongoose = require('mongoose');

const {Schema , model} = mongoose;

const UserSchema = new Schema({
    name : {
        type : String ,
        required : true ,
        unique : true 
    } ,
    email : {
        type : String ,
        required : true ,
        unique : true
    },
    password : {
        type : String ,
        required : true
    },
    img : {
        type : String
    } ,
    subscribers : {
        type : Number ,
        default : 0
    } ,
    subscribedChannels : {
        type : [String],
        default : []
    }
} , {timestamps : true});

const User = model('user' , UserSchema);

module.exports = User