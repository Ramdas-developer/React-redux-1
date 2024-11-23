import axios from "axios";

const loginAPi = async () => {
  try {
    const token = localStorage.getItem("token")
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/get`,{headers:{Authorization:`$Bearer ${token}`}}
    );
    console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
};
export default loginAPi;
