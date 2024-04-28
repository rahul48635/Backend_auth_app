const express=require('express');
const app=express();
const authRouter=require('../backend/Router/authRoute');
const databaseconnect=require('../backend/config/databaseConfig');
const cookieParser=require('cookie-parser');
const cors=require('cors');

databaseconnect();
app.use(cors())
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth/',authRouter);
app.use('/',(req,res)=>{
    res.status(200).json({data:"JWTauth SERVER IS UP",});
})
module.exports=app;
