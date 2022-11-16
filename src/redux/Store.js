import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart'

export const Store = configureStore({
   reducer:{
    cart:cartReducer,
   }
})


