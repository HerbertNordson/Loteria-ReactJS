import { createSlice } from "@reduxjs/toolkit";

const initialStateNumbers = {
  numberArr: [],
};

const numberSlice = createSlice({
  name: "numbers",
  initialState: initialStateNumbers,
  reducers: {
    handlerArrNumbers(state, action) {
      const newNumb = action.payload;
      state.numberArr.push(newNumb);
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
