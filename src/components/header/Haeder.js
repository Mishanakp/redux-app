import React from 'react'
import {AppBar} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Header.css'
const Haeder = () => {
  return (
    <div>
     <AppBar  className='appbar'>
        <span className='carticon'><ShoppingCartIcon/></span>
     </AppBar>
    </div>
  )
}

export default Haeder
