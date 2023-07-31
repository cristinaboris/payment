import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'
import cartUiSlice from './cartUiSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    cartUi: cartUiSlice
  },
})


export default store;