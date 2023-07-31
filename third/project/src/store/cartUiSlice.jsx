import { createSlice } from '@reduxjs/toolkit';


const initialState = {
      cartIsVisible: false
 
  }

export const cartUiSlice = createSlice({
    name: 'cartUi',
    initialState,
    reducers: {
        toggle(state){
       state.cartIsVisible = !state.cartIsVisible;
        }
    }}
)
export const {toggle} = cartUiSlice.actions

export const visibleCart = (state) => (state.cartUi.cartIsVisible)
export default cartUiSlice.reducer;