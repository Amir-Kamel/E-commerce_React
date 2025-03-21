import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalItems: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.cartItems.find(item => item.id === action.payload.id);

            if (item) {
              item.quantity += 1;
            } else {
              state.cartItems.push({ ...action.payload, quantity: 1 });
              state.totalItems += 1;
            }
          },
        
        removeFromCart: (state, action) => {
            const item = state.cartItems.findIndex(item => item.id === action.payload);
            if (item !== -1) {
                state.cartItems.splice(item, 1);
                state.totalItems -= 1;
            }
          },
          
          increaseQuantity: (state, action) => {
            const item = state.cartItems.find(item => item.id === action.payload);
            if (item) {
              item.quantity += 1;
            }
          },
        
          decreaseQuantity: (state, action) => {
            const item = state.cartItems.find(item => item.id === action.payload);
            if (item && item.quantity > 1) {
              item.quantity -= 1;
            }
            else{
                item.quantity -= 1;
                state.totalItems -=1;
                state.cartItems.splice(item, 1);
            }
          },

    },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
