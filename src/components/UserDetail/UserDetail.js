import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import UserHeader from '../UserHeader/UserHeader';
import './Userdetail.css';

const UserDetail = () => {
    const [user, setUser] = useState([]);
    const [loggedInUser, setLoggedInUser] =useContext(UserContext);
    let url = "https://stark-taiga-30560.herokuapp.com/userdetail/";
    if(loggedInUser!==undefined)
        url = `https://stark-taiga-30560.herokuapp.com/userdetail/${loggedInUser.email}`
    
       useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data));
    }, [])
    

    return (
        <>
            <UserHeader></UserHeader>
            <div className="container">
                <div className="row">
                    {user.map(d => <div className="col-md-6">
                        <div className="event-card  user-card">
                            <img style = {{height:'100px'}} src={require(`../../Images/image/${d.event}.png`)} alt={`${d.event}`} srcset=""/>
                            <h3>{d.name}</h3><br></br>
                            <p> {d.event} </p>
                        </div>
                    </div>)}
                </div>
            </div>
        </>
    );
};

export default UserDetail;