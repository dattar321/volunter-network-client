import React, { useContext } from 'react';
import logo from '../../Images/logos/Group 1329.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom";
import { UserContext } from '../../App';
import firebase from "firebase/app";
import "firebase/auth";

const UserHeader = () => {
    let history = useHistory();
    const [loggedInUser, setLoggedInUser]= useContext(UserContext);

    const handleLogOut = ()=>{
        firebase.auth().signOut().then(() => {
            history.push('/home');
          }).catch((error) => {
            // An error happened.
          });
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
                        {loggedInUser!==undefined?
                        <li class="nav-item diabled">
                            <Link 
                            class="nav-link" to="/blog">{loggedInUser.name}</Link>
                        </li>:
                        <li></li>
                        }
                        <li>
                         <button className="btn btn-primary" onClick={handleLogOut} >Log out</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </Router>
        
        </div>
    );
};

export default UserHeader;