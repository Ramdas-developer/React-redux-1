// // DataTableComponent.js
// import React, { useState } from "react";
// import axios from "axios";

// const DataTableComponent = ({ userData, fetchData, setSelectedUser }) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5;

//   const handleDelete = (id) => {
//     axios.delete(`http://localhost:5001/data/${id}`).then(() => {
//       fetchData();
//     });
//   };

//   const filteredData = userData.filter(
//     (item) =>
//       item.name.toLowerCase().includes(searchTerm) ||
//       item.email.toLowerCase().includes(searchTerm) ||
//       item.phone.includes(searchTerm)
//   );

//   const currentItems = filteredData.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   return (
//     <div>
//       <input
//         onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
//         type="search"
//         placeholder="Search"
//         className="searchbox"
//       />

//       <table className="data-table">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//             <th>Password</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentItems.map((item) => (
//             <tr key={item.id}>
//               <td>{item.name}</td>
//               <td>{item.email}</td>
//               <td>{item.phone}</td>
//               <td>{item.password}</td>
//               <td>
//                 <button onClick={() => handleDelete(item.id)}>Delete</button>
//                 <button onClick={() => setSelectedUser(item)}>Edit</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div className="pagination">
//         <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>
//           Previous
//         </button>
//         <button onClick={() => setCurrentPage((prev) => prev + 1)}>Next</button>
//       </div>
//     </div>
//   );
// };

// export default DataTableComponent;
