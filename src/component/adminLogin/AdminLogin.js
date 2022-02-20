import axios from '../../axios';
import React, { useContext, useState } from 'react';
import './AdminLogin.css'
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../store/AuterContext';


function AdminLogin() {
  const [name,setName] = useState('')
  const [password, setPassword] = useState('');
 const {getLoggedIN} = useContext(AuthContext)

  const errorMessage = () => alert('name and password not match')
  const navigate = useNavigate();
  
  const fromSubmit = e =>{
    e.preventDefault();
    try{
      axios.post('/admin/login',{name:name,password:password}).then((response)=>{
      getLoggedIN(); 
        console.log(response.data);
        if(response.data == true)  navigate('/admin/home');
        else  errorMessage();
      })
    }catch(err){
      console.log(err);
      alert('user password and email not vaild')
    }

  }
  return (
    <div className="admin-todu-container">
    <form onSubmit={fromSubmit} className="admin-input_section">
    <h2> Admin Login </h2>
      <input value={name} onChange={((e)=>{setName(e.target.value)})} type="text" placeholder="Enter Name" required />
      <input type="password" value={password} onChange={((e)=>{setPassword(e.target.value)})} placeholder="Password" required />
      
      <button className='btn btn-primary'>Submit</button>
    </form>
  </div>
  );
}

export default AdminLogin;
