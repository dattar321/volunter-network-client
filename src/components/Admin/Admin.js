import React, { useEffect, useState } from 'react';
import logo from '../../Images/logos/Group 1329.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom";

const Admin = () => {
    let history = useHistory();
    const [volunteers,setVolunteers] = useState();

    useEffect(()=>{
        fetch('https://stark-taiga-30560.herokuapp.com/volunteers')
        .then(res=>res.json())
        .then(data=>{
            setVolunteers(data);
        })
    },[])

    const handleVolunteers = ()=>{
        
    }
    const handleAddevent = ()=>{
        history.push('/addevent');
    }

    return (
        <div>
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
                                <button onClick = {handleAddevent} className="btn btn-dark">Addevent</button>
                                
                            </ul>
                        </div>
                    </nav>
                </Router>
                <div className="row" style={{
                    padding:'10px',
                    margin:'20px'
                }}>
                    <div className="col-md-3"><h3>Name</h3></div>
                    <div className="col-md-3"><h3>Email</h3></div>
                    <div className="col-md-3"><h3>Date</h3></div>
                    <div className="col-md-3"><h3>Event</h3></div>

                    
                    {volunteers?
                        volunteers.map(d=>
                            <>
                                <div className="col-md-3">{d.name}</div>
                                <div className="col-md-3">{d.email}</div>
                                <div className="col-md-3">{d.date}</div>
                                <div className="col-md-3">{d.event}</div>

                            </>
                        ):
                        <></>
                    }
                    
                </div>
        
            </div>
        </div>
    );
};

export default Admin;