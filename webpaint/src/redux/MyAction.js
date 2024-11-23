import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counterSlice";
import any from "./MyApi";

function MyAction (){

    const count = useSelector((state) => state.counter.value )
    const dispatch = useDispatch();
    const [api, setApi] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await dispatch(any());
            console.log(response, "wwwwww")
            setApi(response.payload)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=> {
        handleSearch();
    },[]);


    return(
        <div>
            <ul>
            {api            
            // ?.filter((data) => data.username === "Samantha")
            .map((data, i)=> 
                <li key={data.id} >{data.address.city }</li>
            )}
            </ul>
            

            <p>Count : {count}</p>
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
        </div>
    )
}
export default MyAction;