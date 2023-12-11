import React from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function ProductsDetails() {
  return (
    <div>
        <NavLink to="123"> <p>Product 123</p></NavLink>
        <NavLink to="456"> <p>Product 456</p></NavLink>
        <NavLink to="abc"> <p>Product abc</p></NavLink>
        <Outlet/>
    </div>
  )
}

export default ProductsDetails