/*
* express
* mongoose
* nodemon (npm i nodemon -g)
* cors
* dotenv
* npm i express mongoose cors dotenv
* * */
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const port = process.env.USER_PORT;

//------------------------------------
const UserRoute = require('./routes/UserRoute');
//------------------------------------

const app = express();
app.use(cors());

mongoose.connect(
    'mongodb://127.0.0.1:27017/robotikka',
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:false,
        useCreateIndex:true
    }
).then(()=>{

    app.listen(port,()=>{
        console.log(`Robotikka User Service up and running on ${port}`)
    });

}).catch((error=>{
    console.log(error);
}))
//-----------------------
app.use('/api/v1/userRoute', UserRoute);
