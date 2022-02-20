import React from "react";
import "./NavBar.css";
import {useNavigate} from 'react-router-dom'
import LogOutBTN from "../LogOut/LogOutBTN";
function NavBar() {
   const navigate = useNavigate();
   const addUserHandler = () => navigate("/admin/addUser");
   const homeHandler = () => navigate('/admin/home')
  return (
    <div>
      <div className="navBarmain">
        <h4 onClick={homeHandler}>Home</h4>
        <div className="subDiv">
          <h5 onClick={addUserHandler}>+ User</h5>
       
          <LogOutBTN />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
