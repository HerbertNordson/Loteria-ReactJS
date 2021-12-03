import { createSlice } from "@reduxjs/toolkit";

const initialStateCart = {
  items: [],
  count: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialStateCart,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      state.items.push({
        itemID: state.count++,
        itemGame: newItem.game,
        itemType: newItem.type,
        itemPrice: newItem.price,
        itemColor: newItem.color,
        totalPrice: newItem.price,
      });
      state.totalQuantity++;
    },
    removeItemToCart(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => +item.itemID !== +id);
    },
  },
});

export const cartActcion = cartSlice.actions;

export default cartSlice;
