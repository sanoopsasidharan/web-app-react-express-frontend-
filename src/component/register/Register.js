import React, { useState } from "react";
import "./Register.css";
import axios from "../../axios";
import {useNavigate} from 'react-router-dom'
  

function Register() {
  const [name,setName] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate();
  

 
 const handleSubmit = async (e) =>{
  e.preventDefault()
  await axios.post('/addUser/',{name:name,password,password}).then((res)=>{
    console.log(res.status);
    if(res.status === 200){
      navigate("/");
    }
  })
 }
  const loginHandiler = () => { navigate('/login')}
  return (
    <div className="backColour">
      <div className="todu-container">
        <form onSubmit={handleSubmit} className="input_section">
          <h2> Register</h2>
          <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}  placeholder="Enter Name" required />
          <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}}  placeholder="Password " required />
          <p onClick={loginHandiler}>I have an account ...!</p>
          <button className="btn btn-dark">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
