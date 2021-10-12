import React from "react"
import "./AddEvent.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faPlus}  from "@fortawesome/free-solid-svg-icons"
import {Link} from "react-router-dom"
const AddEvent = () =>{

    return(
            <button className="addbtn">
               <Link to="/newevent"> <FontAwesomeIcon icon={faPlus} /></Link>
            </button>
)
}

export default AddEvent