const Events = require("../models/event-model");

const getallevents = async (req,res,next) =>{
        let events;
        try{

             events = await Events.find({});
        }
        catch(err){
            res.status(500).json('server down');  
            
        }
          res.json({events : events.map(events => events.toObject({getters:true}))});
}


const createevent = async (req,res,next) =>{
        const{title,date,location,time} = req.body;
        let newevent;

        try{
            newevent = await new Events({
                title,date,location,time,image : req.file.path
            })       

        }
        catch(err){
                console.log("something went wrong");
                res.status(404).json({message : "something went wrong"});
        }
        if(!newevent){
            res.status(404).json({message: "cannot create provide more info"});
        }
        try{
            await newevent.save();
        }catch(err){
            console.log(err);
            res.status(404).json({message:"cannot create event"});
        }


        res.status(201).json({newevent : newevent})
}


const likeEvent = async (req,res,nwxt) =>{
    
    const eventid = req.params.eid;
    let event
    try{
        event = await Events.findById(eventid);
    }
    catch(err){
        console.log(err);
        res.status(404).json("try after some time")
    }
    if(!event){
        res.status(404).json("event does not exist");
    }
    try{
        event.isliked = true;
        await event.save();
    }
    catch(err){
        res.staus(404).json("cannot like");
    }

    res.status(201).json("liked")

}
exports.getallevents = getallevents;
exports.createevent = createevent;
exports.likeEvent = likeEvent;