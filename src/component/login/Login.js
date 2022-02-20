import React ,{useContext, useState} from 'react';
import {useNavigate} from 'react-router-dom'
import './Login.css'
import axios from '../../axios';
import AuthContext from '../../store/AuterContext';


function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const {getUserLoggedin} = useContext(AuthContext)
  const Data ={
    name : name,
    password : password
  }
  const navigate = useNavigate();
  // navigate registeration page 
 const  signUpHandiler = () =>{
     navigate('/register')
  }

  // submit from 
  const submitLogin = e =>{
    e.preventDefault();
    axios.post('/loginUser/',Data).then((res)=>{
      getUserLoggedin();
      console.log(res.data);
      if(res.status === 200) navigate('/')
      if(res.data == false)  alert('sorry name and password not matched');
      
    })
  }
  return (
    <div className="todu-container">
      <form onSubmit={submitLogin} className="input_section">
      <h2> Login </h2>
        <input value={name} onChange={((e)=>{setName(e.target.value)})} type="text" placeholder="Enter Name" required />
        <input value={password} onChange={((e)=>{setPassword(e.target.value)})} type="password" placeholder="Password" required />
        <p onClick={signUpHandiler}>Register</p>
        <button className='btn btn-dark'>Submit</button>
      </form>
    </div>
  );
}

export default Login;
