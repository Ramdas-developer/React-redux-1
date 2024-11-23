// CreateForm.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./create2.css";

const CreateForm = ({ onUserCreated, selectedUser, clearSelectedUser,editedData, id}) => {
  const navigate = useNavigate();
  const initialFormState = {
    name: "",
    email: "",
    phone: "",
    password: "",
  };
 
  console.log(selectedUser,"selecteduser")
  const [formData, setFormData] = useState(initialFormState);
  const Url = `${process.env.REACT_APP_BACKEND_URL}/api`;

  useEffect(() => {
    if (selectedUser) {
      setFormData(selectedUser);
    }
  }, [selectedUser]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCreateOrUpdate = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.password) {
      alert("Please fill all credentials!");
      return;
    }

    try {
      if (selectedUser) {
        await axios.put(`${Url}/${selectedUser._id}`, formData);
        alert("Data updated successfully");
      } else {
        await axios.post(Url, formData);
        alert("New details added successfully");
      }
      onUserCreated();
      setFormData(initialFormState);
    } catch (error) {
      console.error("Error updating data", error);
    }
  };

   
    
    const handleLogin = () => {
    navigate('/mylogin');
  };

  return (
    <form onSubmit={handleCreateOrUpdate} className="user-form mt-5">
      <h1>{selectedUser ? "Edit User" : "Signup Here"}</h1>
         <div class="form-group">
     <label for="exampleInputName">Name</label>
     <input type="name" onChange={handleInputChange} value={formData.name} name="name" class="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Enter name" />
     <small id="emailHelp" class="form-text text-muted"></small>
   </div>

   <div class="form-group">
     <label for="exampleInputEmail1">Email address</label>
     <input type="email" onChange={handleInputChange} value={formData.email} name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
     <small id="emailHelp" class="form-text text-muted"></small>
   </div>

   <div class="form-group">
     <label for="exampleInputPhone">Phone</label>
     <input type="tel" onChange={handleInputChange} value={formData.phone} name="phone" class="form-control" id="exampleInputPhone" aria-describedby="phoneHelp" placeholder="Enter phone" pattern="[0-9]{10}" required />
     <div class="invalid-feedback">Please enter a valid 10-digit phone number.</div>
     <small id="emailHelp" class="form-text text-muted"></small>
   </div>

   <div class="form-group">
     <label for="exampleInputPassword1">Password</label>
     <input type="password" value={formData.password} onChange={handleInputChange} name="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
   </div>

   <div class="form-check">
     <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
     <label class="form-check-label" for="exampleCheck1">Check me out</label>
   </div>

   <div className="log-container">
     <div className="btn-wrapper">
         <button type="submit" class="btn btn-primary" value={"submit"}> {selectedUser ? "Update" : "Signup"}</button> 
     </div>

     <div className="btn-wrapper">
       <button onClick={handleLogin} id="login-btn">Login</button>
       <label>(if you have already account)</label>
     </div>
   </div>
    </form>
  );
};

export default CreateForm;
