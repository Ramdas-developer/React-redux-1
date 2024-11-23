import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Register = () => {

  const navigate = useNavigate();
  const  [input ,setInput] = useState({
    name: "",
    email: "",
    password: "",
  })

 
  const handleSubmit = (e) =>{
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/loginsign")

  
  }
  

  // const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/login");
  };
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        
          <label>Name :</label>
          <input type="text" name="name" value={input.name} onChange={(e)=> setInput({...input, [e.target.name]:e.target.value,})}  /><br/>
        
        
          <label>Email :</label>
          <input type="email" name="email" value={input.email} onChange={(e)=> setInput({...input, [e.target.name]:e.target.value,})}  /><br/>
        

        
          <label>Password :</label>
          <input type="password" name="password" value={input.password} onChange={(e)=> setInput({...input, [e.target.name]:e.target.value,})}  /><br/>
        
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleSearch} type="login">
        Login Now
      </button>
    </div>
  );
}
export default Register; 
