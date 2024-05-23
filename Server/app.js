const express = require('express');
const app = express();
const PORT = 8080;
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRouter = require('./routes/user');
const commentRouter = require('./routes/comment');
const videoRouter = require('./routes/video');
const authRouter = require('./routes/auth');
const bcrypt = require('bcryptjs');
const cookieParser = require('cookie-parser');

dotenv.config()

mongoose.connect(process.env.MONGO)
.then( () => {
    console.log(`Db Connected Successfully`);
})
.catch( (e) => {
    console.log(`Error Connecting DB ${e}`)
})


app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieParser());



app.use(userRouter);
app.use(commentRouter);
app.use(videoRouter);
app.use(authRouter);
app.use((err , req , res , next) => {
    const status = err.status || 500 
    const message = err.message || 'Something Wend Wrond';
    return res.status(status).json({
        success : false ,
        status , 
        message
    })
})










app.listen(PORT , ()=> {
    console.log(`Server Connected At PORT : ${PORT}`);
})