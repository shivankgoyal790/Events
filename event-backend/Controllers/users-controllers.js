const Users = require("../models/user-model");
const login =async (req,res,next) =>{
    const{email , password} = req.body;
    let answer;
    try{
      answer = await Users.findOne({email:email});
  
    }
    catch(err){
        console.log("hi");
      res.json("cannot log in");
    }
    if(!answer){
    res.status(400).json('check credentials');
    return next();
    }
    res.json( {message : "logged in",user : answer.toObject({getters : true})});
  }
  


  const signup =async (req,res,next) =>{
      
    const {name,email,password} = req.body;
      let usercheck
      try{
        usercheck = await Users.findOne( {email : email})
      }  
      catch(err){
        res.status(500).json("cannot signup!");
        console.log(err);
      }
  try{
      if(usercheck)
      {
        res.status(400).json('user already exist');
  
        throw new Error('user exist');
      }}catch(err){
        console.log('user already exist');
        return next();
      }
      const newuser = await new Users (
            {
              name : name,
              email : email,
              password : password
            }
          )
        try{
          if(!newuser.password || newuser.name === "" || newuser.email === "" ){  
            throw new Error('check please');
          }
          else{
  
              await newuser.save();
            }
          }
          catch(err){
            res.status(404).json("check credentials cannot signup");
             
          } 
          res.json({user : newuser.toObject({getters:true})});
        }


  exports.login =login;
  exports.signup = signup;