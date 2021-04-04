import React from 'react';
import logo from '../../Images/logos/Group 1329.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom";
const Addevent = () => {
    let history = useHistory();

    const handleVolunteers = ()=>{
        history.push('/admin');
    }

    const handleAddevent = ()=>{
        console.log("cilik to hoise");
        const eventNode = document.getElementById('addEvent'); 
        let event = {};
        if(eventNode) event  = eventNode.value;

        fetch('https://stark-taiga-30560.herokuapp.com/addEvent',{
            method:'POST',
            headers:{
                'content-Type' : 'application/json'
            },
            body: JSON.stringify(event)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log("add hoitese")
            document.getElementById('eventAddedMsg').innerHTML =  `
                <h4>Event Added Succesfully</h4>
            `
        })
    }

    return (
        <div className = "container">
                <Router>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light ">
                        <img src={logo} alt="" srcset=""/>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav ml-auto">
                                
                                <button onClick = {handleVolunteers} className="btn btn-primary">Volunteers</button>
                                <button  className="btn btn-dark">Addevent</button>
                                
                            </ul>
                        </div>
                    </nav>
                </Router>
                <div className ="text-center" style={{
                    marginTop:"40px"
                }}>
                    <input style={{
                        width:'30%'
                    }} placeholder = "Enter an event" id = "addEvent" type="text" name=""/>
                    <br></br>
                    <button onClick={handleAddevent} className="btn btn-primary">Add Event</button>
                </div>
                <div id="eventAddedMsg"></div>
            </div>
        
    );
};

export default Addevent;
/*
        <div>
            <input id = 'addEvent' type="text"/>
            <button onClick={handleAddEvent} class = "btn"type="submit">add</button>
        </div>
        */