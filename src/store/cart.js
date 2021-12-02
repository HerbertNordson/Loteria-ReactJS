import { createSlice } from "@reduxjs/toolkit";

const initialStateCart = {
  items: [],
  totalQuantity: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialStateCart,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      state.items.push({
        itemID: (Math.random() * 10).toFixed(2),
        itemGame: newItem.game,
        itemType: newItem.type,
        itemPrice: newItem.price,
        itemColor: newItem.color,
        totalPrice: newItem.price,
        quantity: 1,
      });
    },
    removeItemToCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartActcion = cartSlice.actions;

export default cartSlice;
