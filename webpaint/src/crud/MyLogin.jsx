import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./create.css";
import './mylogin.css';


const MyLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email);
  console.log(password);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5001/data");
      console.log(response);

      const data = await response.json();
      console.log(data);

      const user = data.find(
        (user) => user.email === email && user.password === password
      );
      console.log(user);
      if (user) {
        navigate(`/showdata?userId=${user.id}`);
        // navigate("/ShowData");
        alert("User Login Successfully");
        console.log("Login successfully");
        // navigate(`/showdata`);
      } else {
        alert("Email and Password is wrong. If you don't account Please Create New User.");
        // navigate("/create2");
      }
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const handleRegister = () => {
    navigate('/create2')
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="user-form mt-5">
        <h1>Login Here</h1>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            name="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <small id="emailHelp" class="form-text text-muted"></small>
        </div>

        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            name="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>

        
        <div className="register-container">
        <div className="button-wrapper">
        <button className="login-conatainer" type="submit" class="btn btn-primary btn-me4" value={"submit"}>
          Login
        </button>
        </div>

        <div className="button-wrapper">
        <button id="regisbtn" onClick={handleRegister}>Register here</button>
        <label htmlFor="regisbtn">(if you don't account)</label>
        </div>
        </div>
 
      </form>

      {/* <ShowData /> */}
    </div>
  );
};
export default MyLogin;
