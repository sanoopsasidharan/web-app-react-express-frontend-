import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";
import './Table.css'

function Table() {
  const [user, setUser] = useState([]);
  const [searchData,setSearchData]=useState('')
  const [deleteUser,setDeleteUser]=useState(0)

  // finding user 
  const findData = e =>{
    e.preventDefault();
    axios.post('/admin/findUser',{searchData:searchData}).then((response)=>{
      if(response.data)  setUser(response.data.finduser);
      else alert('No users')
    })
  }
  
  // showing all user
  useEffect(() => {
    axios.get("/admin").then((response) => {
      setUser(response.data.response);
    });
  },[deleteUser]);
  const navigate = useNavigate();


 const userDetailsEdit = (Id) =>{
  navigate("/admin/editUser",{id:Id});
 }
 const userDataDelete = (Id) =>{

     axios.post('/admin/deleteUser',{id:Id}).then((resp)=>{
       console.log(resp.status);
       if(resp.status) setDeleteUser(deleteUser+1)

     })
 }
  return (
    <div>
      <form onSubmit={findData} className="searchInp" action="">
        <input type="text" value={searchData} onChange={(e=>{setSearchData(e.target.value)})} placeholder="Search user" />
      </form>
      <div className="parantTable">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th scope="col">name</th>
            <th scope="col">password</th>
            <th scope="col">edit</th>
            <th scope="col">delete</th>
          </tr>
        </thead>
        {user ? user.map((obj, index) => {
          return (
            <tbody key={obj._id}>
              <tr>
                <td></td>
                <td >{obj.name}</td>
                <td>{obj.password}</td>
                <td> <button onClick={(()=>{userDetailsEdit(obj._id)})} className="btn btn-primary">Edit</button> </td>
                <td> <button onClick={(()=>{userDataDelete(obj._id)})} className="btn btn-danger">Delete</button> </td>
              </tr>
            </tbody>
          );
        }) : ''}
      </table>
    </div>
    </div>
  );
}

export default Table;
