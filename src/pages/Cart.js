import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice'

const Cart = () => {
    const dispatch = useDispatch()
    const products = useSelector((state)=> state.cart)

    
    const handleClick =(id)=>{
        dispatch(remove(id))
    }
  return (
    <div>
        <h3>Cart</h3>
        <div className='cartWrapper' >
            {products.map((item,index)=>(
                <div className='cartCard' key={index} >
                    <img src={item.image} alt={item.id} />
                    <h4>{item.title}</h4>
                    <h4>{item.price}</h4>
                    <button className='btn' onClick={()=>handleClick(item.id)} >Remove</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Cart