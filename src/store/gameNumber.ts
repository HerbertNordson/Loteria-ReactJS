import { createSlice } from "@reduxjs/toolkit";
import { INumber } from "./interface";

const initialStateNumbers = {
  numberArr: [],
};

const numberSlice = createSlice({
  name: "numbers",
  initialState: initialStateNumbers,
  reducers: {
    handlerArrNumbers(state: INumber, action) {
      const newNumb: number = action.payload;
      state.numberArr.push(newNumb);
    },
    handlerRemoveItemArrNumbers(state: INumber, action) {
      const newNumb: number = action.payload;
      state.numberArr.splice(state.numberArr.indexOf(newNumb), 1);
    },
    handlerRemoveArrNumbers(state) {
      while (state.numberArr.length) {
        state.numberArr.pop();
      }
    },
  },
});

export const numberActions = numberSlice.actions;

export default numberSlice;
