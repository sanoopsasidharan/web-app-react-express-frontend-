import React, { useState } from "react";
import "./AddUser.css";
import axios from "../../axios";
import{useNavigate}from 'react-router-dom'


function AddUser() {
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
   const addUserHandler = () => navigate("/admin/home");

    const submitForm = async (e) =>{ 
        e.preventDefault();
         await axios.post('/addUser/',{name:name,password,password}).then((res)=>{ 
          if(res.status === 200){
              alert('user add')
              addUserHandler();

          }else{
              alert('plese try again')
          }
          })
       
    }
  return (
    <div className="backColour">
      <div className="todu-container">
        <form onSubmit={submitForm} className="input_section">
          <h2> Add User</h2>
          <input type="text" value={name}  onChange={((e)=>{setName(e.target.value)})} placeholder="Enter Name" />
          <input type="password"   value={password} onChange={((e)=>{setPassword(e.target.value)})}  placeholder="Enter Password" />
          <button className="btn btn-dark">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AddUser;
