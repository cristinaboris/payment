import { createSlice } from '@reduxjs/toolkit';



const initialState = {
    cartItems: [],
    totalSumAll: 0,
    totalAmount: 0
 
  }

export const cartSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
     addItem:(state, action) =>  {
        const newItem = action.payload;
        const findItem = state.cartItems.find((item) => item.id === newItem.id);
        state.totalAmount++;

        if(!findItem){
            state.cartItems.push({
                id: newItem.id,
                title: newItem.title,
                image01: newItem.image01,
                price: newItem.price,
                quanity: 1,
                totalPrice: newItem.price

            })
     
       }else{
        findItem.quanity++;
        findItem.totalPrice = Number(findItem.totalPrice) + Number(newItem.price)
        
     }
     state.totalSumAll = state.cartItems.reduce((total, item) => total + Number(item.price) * Number(item.quanity), 0
     
     )
    },
/// remove item 
     removeItem(state, action){
     const id = action.payload;
     const findItem = state.cartItems.find((item) => item.id === id)
     state.totalAmount--;

     if(findItem.quanity === 1){
        state.cartItems = state.cartItems.filter(item => item.id !== id)
     }else{
        findItem.quanity--;
        findItem.totalPrice = Number(findItem.totalPrice) - Number(findItem.price)
     }
     state.totalSumAll = state.cartItems.reduce((total, item) =>  total + Number(item.price) * Number(item.quanity) , 0
     
     )
},
//delete item

deleteItem(state, action){
    const id = action.payload;
    const findItem = state.cartItems.find((item) => item.id === id)

    if(findItem){
        state.cartItems = state.cartItems.filter(item => item.id !== id)
        state.totalAmount = state.totalAmount - findItem.quanity
    }
    state.totalSumAll = state.cartItems.reduce((total, item) => total + Number(item.price) * Number(item.quanity), 0
     
     )
}
}}
)
export const {addItem, removeItem, deleteItem} = cartSlice.actions

export const totalQuanity = (state) => (state.cart.totalAmount);

export const items = (state) => (state.cart.cartItems)

export const totalSumAlll = (state) => (state.cart.totalSumAll)

export default cartSlice.reducer;