const express = require("express");
const path= require("path");
const fs = require('fs');
const mongoose = require("mongoose")
const eventroutes = require("./routers/event-routes");
const userroutes = require("./routers/user-routes")
const app = express();

app.use(express.json());
app.use('/uploads/images',express.static(path.join('uploads','images')));
app.use((req,res,next) =>{
res.setHeader('Access-Control-Allow-Origin','*');
res.setHeader('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept,Authorization');
res.setHeader('Access-Control-Allow-Methods','GET,POST,PATCH,DELETE');
next();
});
app.use("/events",eventroutes);
app.use("/users",userroutes);

mongoose.connect("mongodb+srv://shivank:shivank@cluster0.e3ldd.mongodb.net/Event?retryWrites=true&w=majority").then(()=>{
app.listen(5000);
console.log("connected");
}).catch(err =>{
    console.log(err);
})