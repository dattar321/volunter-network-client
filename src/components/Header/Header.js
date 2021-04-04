import React from 'react';
import logo from '../../Images/logos/Group 1329.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom";


import './Header.css'
const Header = () => {
    let history = useHistory();
    const handleRegister =()=>{
        history.push('/register');
    }

    const handleAdmin = ()=>{
        history.push('/admin');
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
                        <li class="nav-item active">
                            <Link class="nav-link" to="/home">Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/donation">Donation</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/events">Events</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/blog">Blog</Link>
                        </li>
                        <button onClick = {handleRegister} className="btn btn-primary">Register</button>
                        <button onClick = {handleAdmin} className="btn btn-dark">Admin</button>
                        
                    </ul>
                </div>
            </nav>
        </Router>
        
        </div>
    );
};

export default Header;
