import Axios from 'axios';
import {useEffect, useState} from "react";

function Dashboard(){

    const [userList, setUserList]= useState([]);

    useEffect(() =>{
        Axios.post("https://docker-login-6cq7s6cnha-uc.a.run.app/data",{
            email: localStorage.getItem('user')
        }).then((response) =>{
            setUserList(response.data.response);
        });
    });

    const logout =() =>{
        Axios.post("https://docker-login-6cq7s6cnha-uc.a.run.app/logout",{
            email: localStorage.getItem('user')
        }).then((response)=>{
            window.location.href="/login";
        })
    }


    return(

        <div>
            <div>
                <center>
                    <h3>Logged In</h3>
                    Name: {userList.name}<br/>
                    Email: {userList.email}<br/>
                    Location: {userList.location}<br/>
                    <button onClick={logout}>Logout</button>
                </center>
                <div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;