// // FormComponent.js
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const FormComponent = ({ fetchData, selectedUser, setSelectedUser }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: ""
//   });

//   useEffect(() => {
//     if (selectedUser) {
//       setFormData(selectedUser);
//     }
//   }, [selectedUser]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const url = "http://localhost:5001/data";

//     if (!formData.name || !formData.email || !formData.phone || !formData.password) {
//       alert("Please fill all credentials!");
//       return;
//     }

//     if (selectedUser) {
//       // Update existing data
//       axios
//         .put(`${url}/${selectedUser.id}`, formData)
//         .then(() => {
//           fetchData();
//           setSelectedUser(null);
//           setFormData({ name: "", email: "", phone: "", password: "" });
//           alert("Data updated successfully!");
//         })
//         .catch((error) => console.error("Update error", error));
//     } else {
//       // Create new data
//       axios
//         .post(url, formData)
//         .then(() => {
//           fetchData();
//           setFormData({ name: "", email: "", phone: "", password: "" });
//           alert("New Details added successfully!");
//         })
//         .catch((error) => console.error("Create error", error));
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="user-form mt-5">
//       <h1>{selectedUser ? "Update User" : "Signup Here"}</h1>
//       <div className="form-group">
//         <label>Name</label>
//         <input
//           type="text"
//           onChange={handleInputChange}
//           value={formData.name}
//           name="name"
//           className="form-control"
//           placeholder="Enter name"
//           required
//         />
//       </div>

//       <div className="form-group">
//         <label>Email</label>
//         <input
//           type="email"
//           onChange={handleInputChange}
//           value={formData.email}
//           name="email"
//           className="form-control"
//           placeholder="Enter email"
//           required
//         />
//       </div>

//       <div className="form-group">
//         <label>Phone</label>
//         <input
//           type="tel"
//           onChange={handleInputChange}
//           value={formData.phone}
//           name="phone"
//           className="form-control"
//           placeholder="Enter phone"
//           pattern="[0-9]{10}"
//           required
//         />
//       </div>

//       <div className="form-group">
//         <label>Password</label>
//         <input
//           type="password"
//           onChange={handleInputChange}
//           value={formData.password}
//           name="password"
//           className="form-control"
//           placeholder="Password"
//           required
//         />
//       </div>

//       <button type="submit" className="btn btn-primary">
//         {selectedUser ? "Update" : "Signup"}
//       </button>
//     </form>
//   );
// };

// export default FormComponent;
