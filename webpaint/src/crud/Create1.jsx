import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./create.css";
import "./read.css";


const Create1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset
  } = useForm();

  const [details, setDetails] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);
 

  useEffect(() => {
    try {
      const storedData = localStorage.getItem("data");
      console.log("storeddata", storedData);
      if (storedData) {
        setDetails(JSON.parse(storedData));
        console.log("information get successfully", details);
      }
    } catch (error) {
      console.log("error", error);
    }
  }, []);

  const onSubmit = (data) => {
    const storedData = [...details];

    if (isEdit) {
      //update stored user
      const updatedData = storedData.map((user) =>
        user.id === currentUserId ? { ...user, ...data } : user
      );
      setDetails(updatedData);
      localStorage.setItem("data", JSON.stringify(updatedData));
      alert("User updated details successfully");
    } else {
      // create new user
      const newUser = { ...data, id: Date.now().toString() };
      storedData.push(newUser);
      setDetails(storedData);
      localStorage.setItem("data", JSON.stringify(storedData));
      alert("user created successfully");
    }

    reset();
    setIsEdit(false);
    setCurrentUserId(null);
  };

  const handleEdit = (id) => {
    const userToEdit = details.find((user) => user.id === id);
    console.log(userToEdit);
    if (userToEdit) {
      setIsEdit(true);
      setCurrentUserId(id);
      // Use setValue to populate the form with user's data
      setValue("Name", userToEdit.Name);
      setValue("rollNo", userToEdit.rollNo);
      setValue("school", userToEdit.school);
      setValue("address", userToEdit.address);
    }
  };

  const handleDelete = (id) => {
    const updatedData = details.filter((user) => user.id !== id);
    setDetails(updatedData);
    localStorage.setItem("data", JSON.stringify(updatedData));
    alert("data deleted successfully");
    console.log("updatedData", updatedData);
  };

  return (
    <>
      <h1>{isEdit ? "Edit" : "Create"}User</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name : </label>
        <input
          type="text"
          {...register("Name", {
            required: "Name is Required",
            minLength: {
              value: 4,
              message: "Min length should be atleast 4",
            },
          })}
        />
        {errors.Name && <p> {errors.Name.message} </p>}
        <br />

        <label>Roll No. : </label>
        <input
          {...register("rollNo", {
            required: "roll no. id required.",
            minLength: {
              value: 1,
              message: "Roll No should be in digit.",
            },
          })}
        />
        {errors.rollNo && <p> {errors.rollNo.message} </p>}
        <br />

        <label>School : </label>
        <input
          {...register("school", {
            required: "School name is required.",
            minLength: {
              value: 4,
              message: "Minimum length should be 4",
            },
          })}
        />
        {errors.school && <p> {errors.school.message} </p>}
        <br />

        <label>Address : </label>
        <input
          {...register("address", {
            required: "Address is required.",
            minLength: {
              value: 4,
              message: "Address information is required.",
            },
          })}
        />
        {errors.address && <p> {errors.address.message} </p>}

        <br />
        <button type="submit">{isEdit ? "Update" : "Submit"}</button>
      </form>

      {/* <div className="tab"> */}
      <h1>Read Page</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No.</th>
            <th>School</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {details.map((items) => (
            <tr key={items.id}>
              <td>{items.Name}</td>
              <td> {items.rollNo} </td>
              <td>{items.school}</td>
              <td>{items.address}</td>
              <td>
                <button onClick={() => handleEdit(items.id)}>Edit</button>
                <button onClick={() => handleDelete(items.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* </div> */}
    </>
  );
};
export default Create1;
