import React from 'react'
import {useDispatch} from 'react-redux'
import { addToCart } from '../../../redux/cart'
import '../ProductList.css'
const BeforeCart = () => {
    const dispatch = useDispatch()
   
  return (
    <div>
      <button className='addtocart'  onClick={()=>{dispatch(addToCart())}}>Add to cart</button>
    </div>
  )
}

export default BeforeCart
