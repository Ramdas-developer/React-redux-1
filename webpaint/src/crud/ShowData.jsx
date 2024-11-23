import React, { useEffect, useState } from "react";
import {useNavigate, useSearchParams } from "react-router-dom";
import "./showdata.css";

const ShowData = () => {
  const [userData, setUserData] = useState(null); // Change to hold a single user object
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("userId");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api");
        const allData = await response.json();
        console.log(allData, "alldata");

        // Filter data to find the logged-in user by userId
        const user = allData.find((ele) => ele._id === userId);
        console.log(user, "loggedin user");
        setUserData(user); // Set the found user as a single object
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    if (userId) {
      fetchData();
    }
  }, [userId]);

  const handleEdit = () => {
    navigate("/editprofile/id", { state: { userData } });
  };

  // if (!userData) return <p>Loading...</p>; // Display loading while data is being fetched

  return (
    <div className="list">
      <h1 className="heading">Profile</h1>
      <ul>
        <li>Name: {userData?.name}</li>
        <li>Email: {userData?.email}</li>
        <li>Phone: {userData?.phone}</li>
        {/* <li>Password: {userData.password}</li> */}
        <button onClick={handleEdit}>Edit</button>
        <button>Delete</button>
      </ul>
    </div>
  );
};

export default ShowData;





























// import React, { useEffect, useState } from "react";
// import "./showdata.css";
// import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

// const ShowData = () => {
//   const [data, setData] = useState([]);
//   const [searchParams] = useSearchParams();
//   const userId = searchParams.get("userId");
//   const navigate = useNavigate();
//   const location = useLocation();

//   console.log(userId, "userid");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://localhost:5001/data");
//         const data = await response.json();
//         console.log(data, "detailsdatareponse");
//         const userData = data.filter((ele) => ele.id === userId);
//         console.log(userData, "usrdata");
//         console.log("usrDataaaa", userData);
//         setData(userData);
//         console.log("response", response);
//         console.log("data", data);
//       } catch (error) {
//         console.error("data dispatched is wrong", error);
//       }
//     };
//     fetchData();
//   }, [userId, location.state]);

//   // const handleEdit = (item) => {
//   //   navigate("/editprofile/id", { state: { userData: item } });
//   // };
//   const handleEdit = () => {
//     navigate("/editprofile/id", { state: { userData: data } });
//   };
//   return (
//     <>
//       <div className="list">
//         <h1 className="heading">Profile</h1>

//         {data.map((item) => (
//           <ul key={item.id}>
//             <li>Name : {item.name}</li>
//             <li>Email : {item.email}</li>
//             <li>Phone : {item.phone}</li>
//             <li>Password : {item.password}</li>
//             <button onClick={() => handleEdit(item)}>Edit</button>
//             <button>Delete</button>
//           </ul>
//         ))}
//       </div>
//     </>
//   );
// };
// export default ShowData;


