import { createSlice } from "@reduxjs/toolkit";

const initialStateSave = {
  itemsSave: [],
};

const saveSlice = createSlice({
  name: "save",
  initialState: initialStateSave,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      state.itemsSave.push({
        itemID: newItem.itemID,
        itemDate: newItem.itemDate,
        itemGame: newItem.game,
        itemType: newItem.type,
        itemPrice: newItem.price,
        itemColor: newItem.color,
        totalPrice: newItem.price,
      });
    },
  },
});

export const saveActcion = saveSlice.actions;

export default saveSlice;
