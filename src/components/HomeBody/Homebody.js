import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import './Homebody.css'

const Homebody = () => {
    let allEvent = true; 
    let location = useLocation();
    const [loggedInUser, setLoggedInUser] =useContext(UserContext);
    const [event,setEvent] = useState([]);
    const [backUpevent,setbackUpevent] = useState([]);
    let history = useHistory();

    useEffect(()=>{
        fetch('https://stark-taiga-30560.herokuapp.com/events')
        .then(res=>res.json())
        .then(data=>{
            console.log(data.event);
            setbackUpevent(data);
            setEvent(data);
        });
    },[allEvent])

    const handleSearch = ()=>{
        console.log(event);
        const search = document.getElementById("searchEvent").value.toLowerCase();
        let searchedEvent = [];
        const searchTopic = new RegExp(`${search}`);
        backUpevent.map( (data)=>{
            const test = data.event.toLowerCase();
            if(searchTopic.test(test)){
                //console.log(data);
                searchedEvent.push(data);
            }
            allEvent = false;
            return 1;
        });
        setEvent(searchedEvent);
        return false;
        //console.log(searchedEvent);
        
    }
    const handleReg = (d)=>{
        localStorage.setItem('data', d);
        console.log(d);
        console.log(loggedInUser);
        history.push("/register");    
    }
    

    return (
        
        <div class="text-center container">
            <div className = "upp">
                <h4>I GROW BY HELPING PEOPLE IN NEED</h4>
                <input  id = "searchEvent" type = "text" class = "search-box" placeholder ="Search your field of interest "  />
                <button class="btn btn-success" onClick={handleSearch}>Search</button>
            </div>
            
            <div className="row ">
                { event.map(data=>
                <div className="col-md-3 pad" >
                    <div className ="event-card"
                        id = "addRegister"
                        onClick = { () =>  handleReg(`${data.event}`)}
                        style={{
                            backgroundImage: 'url(' + require(`../../Images/image/${data.event}.png`) + ')',
                            height:'300px',
                            color:"white",
                            backgroundSize:'cover'
                            
                        
                        }}
                        >
                            <h3> {data.event} </h3>
                    </div>
                        
                </div>)
                }
                
            </div>
        
        </div>

    );
};

export default Homebody;