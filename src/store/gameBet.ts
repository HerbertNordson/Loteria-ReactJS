import { createSlice } from "@reduxjs/toolkit";
import { IBetSlice } from "./interface";

const initialBetState = {
  itemCart: false,
};

const betSlice = createSlice({
  name: "bet",
  initialState: initialBetState,
  reducers: {
    toggle(state: IBetSlice) {
      state.itemCart = true;
    },
    removeToggle(state: IBetSlice) {
      state.itemCart = false;
    },
  },
});

export const betActions = betSlice.actions;

export default betSlice;
