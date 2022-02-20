import React,{useState,useContext} from 'react';


function EditUser() {
    const [name,setName]=useState('');
    const [password,setPassword]=useState('')
    const submitForm = () =>{

    }
    
  return (
    <div className="backColour">
    <div className="todu-container">
      <form onSubmit={submitForm} className="input_section">
        <h2> Edit User</h2>
        <input type="text" value={name}  onChange={((e)=>{setName(e.target.value)})} placeholder="Enter Name" />
        <input type="password"   value={password} onChange={((e)=>{setPassword(e.target.value)})}  placeholder="Enter Password" />
        <button className="btn btn-dark">Submit</button>
      </form>
    </div>
  </div>
  );
}

export default EditUser;
