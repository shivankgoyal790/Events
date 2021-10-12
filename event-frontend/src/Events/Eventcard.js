import React, { useState } from "react";
import "./Eventcard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons"
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
const Eventcard = (props) =>{

    const [like ,setlike] = useState(props.isliked);

    const likehandler = async ()=>{
            try{
                setlike(true);
                await fetch(`http://localhost:5000/events//like/${props.id}` , {
                method : "PATCH",
                headers : {'Content-Type' : 'application/json'}})
                
            }
            catch(err){
                console.log(err);
            }
        }  
        

return(
    <div className="event-container">
        <div className="event-image">
            <img src={`http://localhost:5000/${props.image}`} alt="event" />
            <div className="heart" onClick={likehandler}><FontAwesomeIcon  style={{color: like ? "red" : "white"}} icon={faHeart} /></div>
        </div>
        <div className="event-info">
            <h1>{props.title}</h1>
            <div className="location">
                <div><FontAwesomeIcon icon ={faMapMarkerAlt } />&nbsp;{props.location}</div>
                <div><FontAwesomeIcon icon = {faCalendarAlt} />&nbsp;{props.date}</div>
            </div>
            <div className="clock"><FontAwesomeIcon icon={faClock}/>&nbsp;{props.time}</div>
        </div>
    </div>
)
}

export default Eventcard