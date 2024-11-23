import React, { useEffect, useState } from "react";
import axios from "axios";
import data from "../data/UserData.json";
import "./create2.css";
import { useNavigate } from "react-router-dom";
// import { current } from "@reduxjs/toolkit";
// import { useForm } from "react-hook-form";

const Create2 = () => {
 const navigate = useNavigate();

  const details = {
    name: "",
    email: "",
    phone: "", 
    password: "",
  };

  const Url = "http://localhost:5001/data";
  console.log(Url , 'get data')

  const [userData, setUserData] = useState([]);
  const [formData, setFormData] = useState(details);
  const [id, setId] = useState(""); //edit
  const [searchTerm, setSearchTerm] = useState(""); // for search
  const [currentPage, setCurrentPage] = useState(1); // for pagination
  const [itemsPerPage] = useState(5);

  console.log("id", id);
  console.log("userdata", userData);
  console.log("formdata", formData);

  useEffect(() => {
    axios
      .get(Url)
      .then((response) => {
        setUserData(response.data);
        console.log("response", response);
      })
      .catch((error) => console.error("there is an error", error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log("name", name);
  };

  const handleCreate = (e) => {
    e.preventDefault();

    if(!formData.name || !formData.email || !formData.phone || !formData.password){                  //If formData.name is falsy (e.g., null, undefined, 0, "" (an empty string), or NaN), then !formData.name will evaluate to true.
      alert("Please fill all credentials!")
      return;
    }   
    
    if (id) {
      console.log("update");
      axios
      .put(`${Url}/${id}`, formData)
      .then((response) => {
        const updatedData = userData.map((item) =>
          item.id === id ? response.data : item
      );
      setUserData(updatedData);
      setFormData(details)
      setId("");
    })
    .catch((error) => console.log("there was an error", error));
    alert("Data update successfully");
    
  }
  else {    
    
    const isDuplicate = userData.some((user) => user.name === formData.name || user.email === formData.email || user.phone === formData.phone);
    if(isDuplicate){
      alert("This data is already exist. Please enter a new details")
      return;
    }
      
      console.log("create");
    axios.post(Url, {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            password: formData.password,
          })
          .then((response) => {
            setUserData([...data, response.data]);
            setFormData(details);
            setId("")
          })
          .catch((error) => console.log("face error in fetching api", error));
        alert("New Details added succesfully");
    
      // Toast.success("Data update successfully");
    }       
    // this.reset();
  };

  const handleUpdate = (id) => {
    const user = userData.find((ele) => ele.id === id);
    console.log("user", user);
    setId(id);

    setFormData({
      name: user.name,
      email: user.email,
      phone: user.phone,
      password: user.password,
    });
  };

  const handleDelete = (id) => {
    axios.delete(`${Url}/${id}`).then(() => {
      const filteredData = userData.filter((item) => item.id !== id);
      setUserData(filteredData);
      console.log("filteredData", filteredData);
    });
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    console.log("value", value);
  };
  console.log("searchterm", searchTerm);

  const filterdata = userData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm) ||
      item.email.toLowerCase().includes(searchTerm) ||
      item.phone.toString().includes(searchTerm) ||
      item.password.toString().includes(searchTerm)
  );
  console.log("filterdata", filterdata);

  //pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filterdata.slice(indexOfFirstItem, indexOfLastItem);
  console.log("currentitems", currentItems);
  const totalPages = Math.ceil(filterdata.length / itemsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleLogin = () => {
    navigate('/mylogin')
  }

  return (
    <div>
      {/* <form className="form-conatainer">
        <h1 style={{ fontSize: "35px", marginTop: "0" }}>User Form</h1>
        <label>Name : </label>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={handleInputChange}
          value={formData.name}
          name="name"
        />

        <label>Email : </label>
        <input
          type="email"
          placeholder="Enter email"
          onChange={handleInputChange}
          value={formData.email}
          name="email"
        />
        

        <label>Phone : </label>
        <input
          type="number"
          placeholder="Enter phone"
          onChange={handleInputChange}
          value={formData.phone}
          name="phone"
        />
       

        <label>Password : </label>
        <input
          type="text"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleInputChange}
          name="password"          
        />
       
        <br />

        <button type="submit" onClick={handleCreate} value={"submit"}>
          {id ? "update" : "Submit"}
        </button>
      </form> */}

<form  onSubmit={handleCreate} className="user-form mt-5">
  <h1>{id ? "Edit User" : "Signup Here"}</h1>
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
        <button type="submit" class="btn btn-primary" value={"submit"}> {id ? "Update" : "Signup"}</button> 
    </div>

    <div className="btn-wrapper">
      <button onClick={handleLogin} id="login-btn">Login</button>
      <label>(if you have already account)</label>
    </div>
  </div>
</form>

      


      <table className="data-table">
        <thead>
          <tr>
            <th
              colSpan={3}
              style={{ textAlign: "center", fontSize: "40px", color: "brown" }}
            >
              My Data
            </th>
            <th colSpan={2}>
            <input
        onChange={handleSearch}
        className="searchbox"
        type="search"
        placeholder="Search"
      />

            </th>
          </tr>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.password} </td>
              <td>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
                <button onClick={() => handleUpdate(item.id)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageClick(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}

        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
      
    </div>
    
  );
};
export default Create2;



// // Create2.js
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import FormComponent from "./FormComponent";
// import DataTableComponent from "./DataTableComponent";

// const Create2 = () => {
//   const [userData, setUserData] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);

//   const fetchData = () => {
//     axios
//       .get("http://localhost:5001/data")
//       .then((response) => {
//         setUserData(response.data);
//       })
//       .catch((error) => console.error("Error fetching data", error));
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <FormComponent fetchData={fetchData} selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
//       <DataTableComponent userData={userData} fetchData={fetchData} setSelectedUser={setSelectedUser} />
//     </div>
//   );
// };

// export default Create2;
