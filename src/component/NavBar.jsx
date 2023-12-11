import React from 'react'
import { NavLink } from 'react-router-dom'


function NavBar() {
  return (
    <div>
        <ul className='flex justify-center items-center gap-6 font-semibold text-lg my-6 cursor-pointer'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="about">About</NavLink></li>
            <li><NavLink to="contact">Contact</NavLink></li>
            <li><NavLink to="productdetails">Product</NavLink></li>
        </ul>
    </div>
  )
}

export default NavBar