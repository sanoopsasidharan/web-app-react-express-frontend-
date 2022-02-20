import React, { useContext } from 'react';
import axios from '../../axios';
import AuthContext from '../../store/AuterContext';
import './Home.css'


function Home() {
  const {LoggedIN} = useContext(AuthContext);
  console.log(LoggedIN);
  const getDataIndatabase =()=>{
    alert('finding data');

    axios.get('/').then((res)=>{
      console.log(res);
      if(res.status===200){
        alert('you go the result')
      }
    })
    
  } 
  const {getUserLoggedin} = useContext(AuthContext)
  const  userLoggedOut =  async () =>{
    const loggedOut = await axios.get('/logout');
    console.log(loggedOut);
    getUserLoggedin();

  }
  return (
      <div>
       <div className='userNavbar'>
         <h3>home</h3>
         <h3 onClick={userLoggedOut}>LogOut</h3>
       </div>
       <hr />
          <div className='mainContent'>
            <h1>welcome user</h1>
          </div>
      </div>
  );
}

export default Home;
