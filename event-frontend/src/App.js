import React from "react"
import Header from "./header/Header"
import Event from "./Events/Event"
import AddEvent from "./Events/Addevents/AddEvent"
import {BrowserRouter as Router ,Switch,Redirect,Route}  from "react-router-dom"
import Newevent from "./Events/Addevents/Newevent"

const App = () =>{
    return(

       <Router>
       <Header /> 
        <Switch>
        <Route path="/" exact>
        <Event />
        <AddEvent/>
        </Route>
        <Route path="/newevent"><Newevent/></Route>
        <Redirect to="/" ></Redirect>
       </Switch>
       </Router>
    )
}

export default App;