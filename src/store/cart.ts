import { createSlice } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { ICart, ICartItems } from "./interface";
import { saveActcion } from "./save";

const initialStateCart = {
  items: [],
  count: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialStateCart,
  reducers: {
    addItemToCart(state: ICart, action): void {
      const newItem: ICartItems = action.payload;
      state.items.push({
        itemID: state.count++,
        itemData: newItem.data,
        itemGame: newItem.game,
        itemType: newItem.type,
        itemPrice: newItem.price,
        itemColor: newItem.color,
        totalPrice: newItem.price,
      });
      state.totalQuantity++;
    },
    removeItemToCart(state: ICart, action) {
      const id = action.payload;
      state.items = state.items.filter((item: any) => +item.itemID !== +id);
      state.totalQuantity--;
    },
  },
});

export const saveCartItems = (cartItem: ICartItems) => {
  return (dispatch: Dispatch<object>) => {
    dispatch(saveActcion.addItemToItem(cartItem));
  };
};

export const cartActcion = cartSlice.actions;

export default cartSlice;
