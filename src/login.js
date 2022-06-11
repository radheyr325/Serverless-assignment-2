import './App.css';
import {useState} from "react";
import Axios from 'axios';


function Login() {

  const [email, setEmail] = useState('');
  const [pswd, setPswd] = useState('');
  var display ="";
  const login = () => {
    Axios.post('https://docker-login-6cq7s6cnha-uc.a.run.app/login',{
      email: email,
      password : pswd,
    }).then((response) => {
      var message =response.data.message;
      var email =response.data.email;
      if(message==="email"){
        window.alert("Email is invalid");
        display="Email is invalid";
        console.log("a");
      }
      else if(message==="password"){
        window.alert("Password is invalid");
        display="Password is Wrong";
        console.log("b");
      }
      else{
        localStorage.setItem('user',email)
        window.location.href = "/dashboard";
      }
    });

  };

  return (
    <div className="App">
      <div className="registration">
        <h1>Login</h1>
          <label>Email</label>
          <input required type={"email"} name={"email"} onChange={(e)=>{setEmail(e.target.value)}}/><br/>
          <label>Password</label>
          <input required type={"password"} name={"pswd"} onChange={(e)=>{setPswd(e.target.value)}}/><br/>
          <button onClick={login}>Login</button>
        {display}
      </div>
    </div>
  );
}

export default Login;
