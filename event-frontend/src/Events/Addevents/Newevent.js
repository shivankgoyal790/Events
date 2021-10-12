import React, { useCallback, useState } from "react"
import "./Newevent.css"
import Imageupload from "../../Imageupload/Imageupload"
import { useHistory } from "react-router";

const Newevent = () =>{

    const[Newvalue,setnewvalue] = useState({title: "",date:"" ,time:"" ,location :"" , image :undefined});
    const History = useHistory();
    
    const inputimagehandler = useCallback((value) => {
        setnewvalue((prev)=>{

            return{
               
                title : prev.title,
                date : prev.date,
                time : prev.time,
                image : value,
                location : prev.location
            }
        }
        );
    },[])

    const InputHandler = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setnewvalue((prev) =>{
            if(name === "title")
             {return{
                title : value,
                date : prev.date,
                location : prev.location,
                time : prev.time,
                image : prev.image
             }}
             if(name === "date")
             {return{
                title : prev.title,
                date : value,
                location : prev.location,
                time : prev.time,
                image : prev.image
             }}
             if(name === "location")
             {return{
                title : prev.title,
                date : prev.date,
                location : value,
                image : prev.image,
                time : prev.time
             }}
             if(name === "time")
             {return{
                title : prev.title,
                date : prev.date,
                location : prev.location,
                image : prev.image,
                time : value
             }}
        });

    }
    const Addeventhandler = async (event) =>{
        event.preventDefault();
        try{
            const formdata = new FormData();
            formdata.append('title',Newvalue.title);
            formdata.append('date',Newvalue.date);
            formdata.append('image',Newvalue.image);
            formdata.append('location',Newvalue.location);
            formdata.append('time',Newvalue.time);
            const response = await fetch("http://localhost:5000/events/newevent", {
            method : "POST",
            body : formdata
          
        }); 
        const responsedata = response.json();
        if(!response.ok){
            throw new Error(responsedata.message);
        }
        History.push('/');
        }catch(err){
            console.log(err || "cannot create event");
        }

    }
    

    return(
        <div className="addeventcontainer">
            <div className="eventbox">
            <div><h1>Events</h1> 
            </div>
            <div>
            <form onSubmit={Addeventhandler} className="form-container">                                        
                        <Imageupload id="image" name="image" oninput={inputimagehandler}/>
          <br></br>
           <label htmlFor="title">Title:</label>
           <input 
                type="text" 
                name="title" 
                placeholder="Enter title" 
                onChange ={InputHandler} 
                value={Newvalue.title}
            />

           <label htmlFor="location">Location</label>
           <input 
                type="text" 
                name="location" 
                placeholder="Enter location"
                onChange ={InputHandler} 
                value={Newvalue.location} 
              

            />
           <label htmlFor="date">date:</label>
           <input 
                type="text" 
                name="date" 
                placeholder="Enter Event date"
                onChange ={InputHandler} 
                value={Newvalue.date}    
            />
              <label htmlFor="time">Time:</label>
           <input 
                type="text" 
                name="time" 
                placeholder="Enter Time"
                onChange ={InputHandler} 
                value={Newvalue.time}    
            />
            <br/>
           <button type="submit" className="neweventbtn">New Event</button>
           </form>
           </div>
    </div>
        </div>

    )
}

export default Newevent