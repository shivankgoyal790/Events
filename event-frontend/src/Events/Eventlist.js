import React from "react"
import Eventcard from "./Eventcard"
const Eventlist = (props) =>{
    if (props.items.length === 0) {
        return (
          <div className="center">
              <h2>No Events found.</h2> 
          </div>
        );
      }
    
    return(
        <div>
         {props.items.map(curr =>(
             <Eventcard 
             key= {curr.id}
             id = {curr.id}
             title = {curr.title}
             image= {curr.image}
             date = {curr.date}
             time = {curr.time}
             location = {curr.location}
             isliked = {curr.isliked}
              />
         ))
         }
        </div>
    );
}

export default Eventlist;