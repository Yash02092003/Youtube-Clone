const mongoose = require('mongoose')
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const signup = async (req , res , next) => {
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password , salt);
        const newUser = new User({ ...req.body , password : hash});
        await newUser.save();
        res.status(200).send('User Has Been Created Successfully');
    }
    catch(err){
        next(err);
    }
}

const signin = async (req , res , next) => {
    try {
    
        const user = await User.findOne({ name : req.body.name });

        if (!user) return next(new Error('No user found'));
    
        const isCorrect = await bcrypt.compare(req.body.password, user.password);
        if (!isCorrect) return next(new Error('Wrong credentials'));
    
        const token = jwt.sign({ id: user._id }, 'Just A litlle Secret' , {expiresIn : "1 day"});
        
        const {password , ...others} = user._doc

        res.cookie('access_token', token, {
          httpOnly: true,
          secure: true,
          sameSite: 'strict'
        });
        
        console.log(req.user);
        res.status(200).send(others); // More informative message
      } catch (err) {
        next(err);
      }
}








module.exports = { signup , signin } 