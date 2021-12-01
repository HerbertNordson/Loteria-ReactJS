import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth";
import gameBetReducer from "./gameBet";
import cartRecducer from "./cart";

const store = configureStore({
  reducer: {
    auth: authReducer.reducer,
    gameBet: gameBetReducer.reducer,
    cart: cartRecducer.reducer,
  },
});

export default store;
