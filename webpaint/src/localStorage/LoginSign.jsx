import React, { useState } from "react";
import "./loginsign.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const LoginSign = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const {
    register,
    formState: { errors },
  } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const loggeduser = JSON.parse(localStorage.getItem("user"));
      if (
        input.email === loggeduser.email &&
        input.password === loggeduser.password
      ) {
        navigate("/home");
      } else {
        alert("Wrong Email and Password");
      }
    } catch (error) {
      console.log("error");
    }
}

const handleClick = () =>{
  navigate('/loginsign')
}

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login Page</h1>

      <label>UserID: </label>
      <input
        type="email"
        name="email"
        value={input.email}
        onChange={(e) =>
          setInput({ ...input, [e.target.name]: e.target.value })
        }
        {...register("userID", {
          required: "UserID is required",
          minLength: {
            value: 4,
            message: "Min length should be at least 4",
          },
        })}
      />
      {errors.userID && <p>{errors.userID.message}</p>}
      <br />

      <label>Password :</label>
      <input
        type="password"
        name="password"
        value={input.password}
        onChange={(e) =>
          setInput({ ...input, [e.target.name]: e.target.value })
        }
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 4,
            message: "Password must be at least 6 characters long",
          },
        })}
      />
      {errors.password && <p>{errors.password.message}</p>}
      <br />

      <input type="submit" />
      {/* <p>If you don't have register?</p>  */}
      <button onClick={handleClick}>Register Here</button>
      
    </form>


  );
};
export default LoginSign;

// import { useForm } from "react-hook-form";
// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const LoginSign = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const navigate = useNavigate();
//   useEffect(() => {
//     const savedName = localStorage.getItem("name");
//     const savedUserID = localStorage.getItem("email");
//     if ((savedName, savedUserID)) {
//       console.log("Loaded from localStorage:", { savedName, savedUserID });
//     }
//   }, []);

//   const onSubmit = (data) => {
//     try {
//       const { userID, password } = data;
//       console.log(userID, password, "dsadasda");
//       const userData = JSON.parse(localStorage.getItem("data"));
//       console.log(userData);
//       if (userID === userData.email) {
//         if (password === userData.password) {
//           alert("login successfull");
//           navigate("/login");
//         } else {
//           console.log("first");
//         }
//       } else {
//         alert("Incoorect Credentials");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <h1>Login Page</h1>

//       <label>Name :</label>
//       <input
//         {...register("name", {
//           required: "Name is required",
//           minLength: {
//             value: 4,
//             message: "Min length should be at least 4",
//           },
//         })}
//       />
//       {errors.name && <p>{errors.name.message}</p>}
//       <br />

//       <label>UserID: </label>
//       <input
//         {...register("userID", {
//           required: "UserID is required",
//           minLength: {
//             value: 4,
//             message: "Min length should be at least 4",
//           },
//         })}
//       />
//       {errors.userID && <p>{errors.userID.message}</p>}
//       <br />

//       <label>Password :</label>
//       <input
//         type="password"
//         {...register("password", {
//           required: "Password is required",
//           minLength: {
//             value: 6,
//             message: "Password must be at least 6 characters long",
//           },
//         })}
//       />
//       {errors.password && <p>{errors.password.message}</p>}
//       <br />

//       <input type="submit" />
//     </form>
//   );
// };

// export default LoginSign;
