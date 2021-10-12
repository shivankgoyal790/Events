import React, { useState,useEffect }  from "react";
import "./Event.css"
import Eventlist from "./Eventlist";

const Event = () =>{
    const [loadedevents ,setloadedevents] = useState();
    useEffect(()=>{
            const fetchevents = async () =>{
                try{
                    const response = await fetch("http://localhost:5000/events/");
                    const responsedata= await response.json();  
                   
                if(!response.ok){
                    throw new Error("cannot load events");
                  
                }   
                setloadedevents(responsedata.events);
                }catch(err){
                    console.log(err);
                    console.log("cannot laod places")
                }
            }
            fetchevents();
                
            
    },[])
    

    return(
        <div className="allevents">
                {loadedevents && <Eventlist items = {loadedevents} />}

        </div>
    )
}

export default Event;