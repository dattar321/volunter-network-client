import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../App';
import logo from '../../Images/logos/Group 1329.png';
import './Register.css';

const Register = () => {
    let history = useHistory();
    const loggedInUser = {
        name:localStorage.getItem('name'),
        email:localStorage.getItem('email')
    }
    const event = localStorage.getItem('data');
    console.log(event);
    const getValue = (id)=>{
        return document.getElementById(id).value;
    }

    const handleRegister = ()=>{
        const personDetail = {...loggedInUser,
            event:event,
            name:getValue("name"),
            email:getValue("email"),
            date:getValue("date"),
            descripsion:getValue("description"),
            library:getValue("library")
        }
        fetch('https://stark-taiga-30560.herokuapp.com/register',{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body:JSON.stringify(personDetail)

        })
        .then(res=>res.json())
        .then(data=>{
            
        });
        history.push(`/userdetail/${getValue("email")}`);
    }
    return (
        
        <div className="text-center ">
            <div className="logoimg">
                <img src={logo} alt=""/>
            </div>
            <div >
                <div className=" login-box d-flex justify-content-center align-items-center">
                    <form> 
                        <h3>Register as Volunteer</h3>
                        <input className = "class-input" value = {loggedInUser.name} placeholder = "Full Name"  type="text" name="fullName" id="name" required/>
                        <input className = "class-input" type="text"  value = {loggedInUser.email}  placeholder = "Email" name="email" id="email" required/>
                        <input className = "class-input" type="date"   placeholder = "Date" name="date" id="date" required/>
                        <input className = "class-input" type="text" placeholder = "Description" name="description" id="description" required/>
                        <input className = "class-input" type="text" placeholder = "Organize books at the library" name="library" id="library" />
                        <button onClick={handleRegister} className = "btn btn-primary btn-register">Registration</button>
                    </form>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Register;