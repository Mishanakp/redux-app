import React from 'react'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import '../ProductList.css'
import { increment,decrement } from '../../../redux/cart'
const AfterCart = () => {
    const {cartCount} = useSelector((state)=>state.cart)
    const dispatch = useDispatch()
  return (
    <div className='aftrcart'>
      <button className='countButton' onClick={()=>{dispatch(decrement())}}>-</button>
      <div className='count'>{cartCount}</div>
      <button className='countButton' onClick={()=>{dispatch(increment())}}>+</button>
    </div>
  )
}

export default AfterCart
