import { createSlice } from "@reduxjs/toolkit";
import { ISave } from "./interface";

const initialStateSave = {
  itemsSave: [],
};

const saveSlice = createSlice({
  name: "save",
  initialState: initialStateSave,
  reducers: {
    addItemToItem(state: ISave, action): void {
      const newItem = action.payload;
      for (let i = 0; i < newItem.length; i++) {
        state.itemsSave.push({
          ID: newItem[i].itemID,
          Data: newItem[i].itemData,
          Game: newItem[i].itemGame,
          Type: newItem[i].itemType,
          Price: newItem[i].itemPrice,
          Color: newItem[i].itemColor,
        });
      }
    },
  },
});

export const saveActcion = saveSlice.actions;

export default saveSlice;
