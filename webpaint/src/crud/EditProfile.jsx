import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const EditProfile = () => {
  const Url = "http://localhost:5001/data";

  const navigate = useNavigate();
  const location = useLocation();
  const { userData } = location.state || {};
  const { id } = useParams("");
  console.log(id, "edit id");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  console.log("formdatttta", formData); 

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`${Url}/${userData.id}`, formData);
      navigate(`/showdata?userId=${userData.id}`, { state: { success: true } });
    } catch (error) {
      console.error("Error updating data", error);
    }
    console.log("updated data:", formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="user-form mt-5">
        <div className="form-group">
          <label htmlFor="exampleInputName">Name</label>
          <input
            type="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="form-control"
            id="exampleInputName"
            aria-describedby="nameHelp"
            placeholder="Enter name"
          />
          <small id="emailHelp" className="form-text text-muted"></small>
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
            aria-describedby="emailHelp"
            placeholder="Enter email"
            disabled={userData.id}
          />
          <small id="emailHelp" className="form-text text-muted"></small>
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
            aria-describedby="phoneHelp"
            placeholder="Enter phone"
          />
          <small id="emailHelp" className="form-text text-muted"></small>
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

        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};
export default EditProfile;
