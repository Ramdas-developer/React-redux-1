
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


const any = createAsyncThunk("any", async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        return response.data;
    }catch (error) {
        throw error ;
    }
});
export default any;

