import { createSlice } from "@reduxjs/toolkit";

const initialBetState = {
  itemCart: false,
};

const betSlice = createSlice({
  name: "bet",
  initialState: initialBetState,
  reducers: {
    toggle(state) {
      state.itemCart = true;
    },
  },
});

export const betActions = betSlice.actions;

export default betSlice;
