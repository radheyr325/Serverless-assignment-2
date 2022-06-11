import './App.css';
import Axios from 'axios';
import {useEffect, useState} from "react";

function View() {


    const [userList, setUserList]= useState([]);

    useEffect(() =>{
        Axios.get("https://docker-view-6cq7s6cnha-uc.a.run.app/viewusers").then((response) =>{
            setUserList(response.data.results);

        });
    });

    return(
        <div>
            <h1>Active Users</h1>
            <div>
                {
                    userList.map((r) => (
                        <div>
                            <div>
                                Name: {r.name}<br/>
                                Email: {r.email}<br/>
                                Location: {r.location}<br/>
                                Status: {r.state}<br/><br/>
                            </div><br/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default View;