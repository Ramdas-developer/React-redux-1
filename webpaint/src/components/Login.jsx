import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate()

    const handleSearch = () =>{
        navigate("/profile")
    }
  return (
    <div>
        <h1>Login</h1>
        <button onClick={handleSearch}>Profile</button>
    </div>
  )
}
