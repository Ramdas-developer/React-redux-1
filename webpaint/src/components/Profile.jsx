import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Profile() {
    const navigate = useNavigate()
    const param = useParams()

    console.log(param)
    const handleSearch = () =>{
        navigate("/")
    }
  return (
    <div>
        <h1>Profile</h1>
        <p>Profile id {param.id}</p>
        <button onClick={handleSearch}>Register Now</button>
    </div>
  )
}
