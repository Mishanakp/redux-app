import React, { useState } from 'react'
import products from '../../api/products.json'
import AfterCart from './cartButtons/AfterCart'
import BeforeCart from './cartButtons/BeforeCart'
import {useSelector} from 'react-redux'
import './ProductList.css'
const ProductList = () => {
    const {cartCount} = useSelector((state)=>state.cart)
    console.log(cartCount)
     
  return (
    <div className='outerCont'>
            { products?.map((item,key) =>(
                <div className='lapCont' key={key}>
                     <img className='lapImage' alt='lapimage' src={item?.image} />
                     <h1 className='lapHead'>{item?.name}</h1>
                 {  
                 
                 cartCount < 1 ? (<BeforeCart  />) : ( <AfterCart/>)
                    
                 }
                </div>
               
            ))
      }
    </div>
  )
}

export default ProductList
