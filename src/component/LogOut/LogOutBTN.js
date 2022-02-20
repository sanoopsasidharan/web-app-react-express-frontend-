import axios from '../../axios';
import React, { useContext } from 'react';
import AuthContext from '../../store/AuterContext';

function LogOutBTN() {
    const {getLoggedIN} = useContext(AuthContext)
   async function LogOut() {
      const logouted =  axios.post('/admin/loggedOut')
      console.log(logouted);
      getLoggedIN();
   }
  return (
    <>
    <button className='btn btn ml-5' onClick={LogOut}>
        Log Out
    </button>
    </>
  );
}

export default LogOutBTN;
