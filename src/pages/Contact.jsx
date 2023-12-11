import React from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Contact() {
  const navigate=useNavigate()
  return (
    <div>
        <h2>Contact Page</h2>
        <div className='flex gap-2 mt-6'>
          <NavLink to="address"><button className='border-2 rounded-md p-1'>Address</button></NavLink>
          <button onClick={()=>navigate("contactNo")} className='border-2 rounded-md p-1'>Contact No</button>
        </div>
        <Outlet/>
    </div>
  )
}

export default Contact