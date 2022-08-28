import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const items = useSelector((state)=> state.cart)
    console.log("items from redux",items);
  return (
    <div className='navbar' >
        <span className='logo' >Redux Store</span>
        <div>
            <Link className='navLink' to={"/"} >Home</Link>
            <Link className='navLink' to={"/cart"} >Cart</Link>
            <span className='cartCount' >Cart Items : {items.length}</span>
        </div>
    </div>
  )
}

export default Navbar