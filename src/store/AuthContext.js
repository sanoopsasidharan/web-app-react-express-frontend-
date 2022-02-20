// import axios from '../axios';
// import React, { createContext, useEffect, useState } from 'react';
// const AuthContext = createContext();

// function AuthContextProvider(props) {
//     const [loggedin,setLoggedin] = useState(undefined);

//     async function getLoggedIn() {
//           const loggedInResp = await axios.get('/loggedIn')
//           console.log(loggedInResp);
//           setLoggedin(loggedInResp.data)
//       }
//       useEffect (()=>{
//         console.log('calling get loggedin');
//         getLoggedIn();
//       },[])
//   return (
//       <>
//          <AuthContext.Provider value={{loggedin,getLoggedIn}}>
//             {props.children}
//          </AuthContext.Provider>
//       </>
//   );
// }
// export default AuthContext
// export {AuthContextProvider};
