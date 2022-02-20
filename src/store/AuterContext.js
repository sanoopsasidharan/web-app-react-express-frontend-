import axios from '../axios';
import React, { createContext, useEffect, useState } from 'react';
const AuthContext = createContext();

function AuthContextProviders(props) {
    const [LoggedIN,setLoggedIN] = useState(undefined);
    const [userLoggedIn,setUserLoggedin] = useState(undefined);

    async function getLoggedIN (props){
        const LoggedINres = await axios.get('admin/adminLoggedin')
        console.log(LoggedINres);
        setLoggedIN(LoggedINres.data);
    }

    async function getUserLoggedin (){
        const userLoggedINres = await axios.get('/loggedIn');
        setUserLoggedin(userLoggedINres.data)
    }

    useEffect(()=>{
        getLoggedIN();
        getUserLoggedin();
    },[])
  return (
      <AuthContext.Provider value={{LoggedIN,getLoggedIN,userLoggedIn,getUserLoggedin}}>
         {props.children}
      </AuthContext.Provider>
  );
}
export default AuthContext;
export  {AuthContextProviders};
