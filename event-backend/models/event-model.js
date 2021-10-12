const mongoose = require("mongoose")
const Eventschema =new mongoose.Schema({
    title : {type : String, required: true},
    date : {type : String, required: true},
    location :{type : String, required: true},
    image : {type:String,required :true},
    time:{type : String , required : true},
    isliked: {type : Boolean , default : false}
})

module.exports= mongoose.model('Events',Eventschema);