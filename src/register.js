import './App.css';
import {useState} from "react";
import Axios from 'axios';


function Register() {

  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [pswd, setPswd] = useState('');

  const register = () => {
    Axios.post('https://docker-register-6cq7s6cnha-uc.a.run.app/register',{
      name: name,
      email: email,
      password : pswd,
      location : location
    }).then((response) => {
      console.log(response);
      window.alert("Registered Successfully")
      window.location.href="/login";
    });
  };

  return (
    <div className="App">
      <div className="registration">
        <h1>Registration</h1>
          <label>Name </label>
          <input required type={"text"} name={"name"} onChange={(e) => {setName(e.target.value)}}/><br/>
          <label>Location</label>
          <input required type={"text"} name={"location"} onChange={(e)=>{setLocation(e.target.value)}}/><br/>
          <label>Email</label>
          <input required type={"email"} name={"email"} onChange={(e)=>{setEmail(e.target.value)}}/><br/>
          <label>Password</label>
          <input required type={"password"} name={"pswd"} onChange={(e)=>{setPswd(e.target.value)}}/><br/>
          <button onClick={register}>Register</button>
      </div>
    </div>
  );
}

export default Register;
