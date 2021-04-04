import React, { useContext, useState} from 'react';
import logo from '../../Images/logos/Group 1329.png';
import './Login.css'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    useLocation
  } from "react-router-dom";
import { UserContext } from '../../App';


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    
    const handleGoogleSignIN = ()=>{
        console.log("kokokok");
        if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
        else firebase.app();
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {

                
                const { displayName, email } = result.user;
                const loggedInUser = { name: displayName, email };
                
                setLoggedInUser(loggedInUser);
                console.log(loggedInUser);
                history.replace(from);
                
                
                // ...
            }).catch((error) => {
                console.log("failing");
            });
    }

    return (
        <div className="text-center ">
            <div className="logoimg">
                <img src={logo} alt=""/>
            </div>
            <div >
                <div className=" login-box d-flex justify-content-center align-items-center">
                    <div className=""> 
                        <h3>Login With</h3>
                        <button onClick={handleGoogleSignIN} className = "btn btn-primary google-login">Log in with Google</button>
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Login;