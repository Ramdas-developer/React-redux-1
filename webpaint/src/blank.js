import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const EditProfile = () => {
  const location = useLocation();
  const { userData } = location.state || {}; // Get the user data passed in the state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  useEffect(() => {
    if (userData) {
      setFormData({
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        password: userData.password,
      });
    }
  }, [userData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., update the user in the database)
    console.log("Updated Data:", formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="user-form mt-5">
        <div className="form-group">
          <label htmlFor="exampleInputName">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="form-control"
            id="exampleInputName"
            placeholder="Enter name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPhone">Phone</label>
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="form-control"
            id="exampleInputPhone"
            placeholder="Enter phone"
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
