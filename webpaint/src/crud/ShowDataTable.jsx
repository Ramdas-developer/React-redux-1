// ShowDataTable.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./create2.css";
import { useNavigate } from "react-router-dom";

const ShowDataTable = () => {
  const [userData, setUserData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const navigate = useNavigate();
  const Url = `${process.env.REACT_APP_BACKEND_URL}/api`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(Url);
      setUserData(response.data);
    };
    fetchData();
  }, []);

  const handleDelete = async (_id) => {
    await axios.delete(`${Url}/${_id}`);
    setUserData(userData.filter((item) => item._id !== _id));
    console.log("_id", _id);
  };

  const handleEdit = (user, _id) => {
    console.log(user, _id);
    navigate("/register");
  };

  const filteredData = userData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm) ||
      item.email.toLowerCase().includes(searchTerm) ||
      item.phone.toString().includes(searchTerm)
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handleSearch = (e) => setSearchTerm(e.target.value.toLowerCase());

  return (
    <div>
      <table className="data-table">
        <thead>
          <input onChange={handleSearch} type="search" placeholder="Search" />
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
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.password}</td>
              <td>
                <button onClick={() => handleDelete(item._id)}>Delete</button>
                <button onClick={() => handleEdit(item, item._id)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination">
        <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>
          Previous
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button key={index} onClick={() => setCurrentPage(index + 1)}>
            {index + 1}
          </button>
        ))}
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ShowDataTable;
