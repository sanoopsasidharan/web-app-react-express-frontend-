import React, { useContext } from 'react';
import RegisterPage from "./pages/Register";
import Home from "./component/home/Home";
import AdminHome from "./pages/AdminHome";
import { BrowserRouter, Routes, Route,useNavigate,Navigate } from "react-router-dom";
import AddUserPage from "./pages/AddUserPage";
import EditUserPage from "./pages/EditUserPage";
import LoginPage from "./pages/LoginPage";
import axios from './axios';
import AdminLoginPage from "./pages/AdminLoginPage";
import AuthContext from './store/AuterContext';
axios.defaults.withCredentials = true;


function PageRoutes() {
  const {LoggedIN,userLoggedIn} = useContext(AuthContext);
 
  console.log(LoggedIN,userLoggedIn,'dakj;flk');
  return (
    <BrowserRouter>
    <div className="app">
      <Routes>
        <Route exact path="/" element={userLoggedIn ? <Home /> : <Navigate to ='/login' />} />
        <Route path="/register" element={ userLoggedIn ? <Navigate to='/'/>  :<RegisterPage />} />
        <Route exact path='/login' element={userLoggedIn ? <Navigate to='/'/> : <LoginPage />} />
        
        {LoggedIN === true && <>
          <Route exact path="/admin/editUser" element={<EditUserPage />} />
          <Route exact path="/admin/addUser" element={<AddUserPage />} />
        </>}
        <Route exact path="/admin/home" element={LoggedIN ? <AdminHome /> : <Navigate to="/admin/login" />} />
        <Route  path='admin/login' element={LoggedIN ? <Navigate to="/admin/home" /> : <AdminLoginPage />}   />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default PageRoutes;
