import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth";
import gameBetReducer from "./gameBet";
import cartRecducer from "./cart";
import numberReducer from "./gameNumber";
import saveReducer from "./save";

const store = configureStore({
  reducer: {
    auth: authReducer.reducer,
    gameBet: gameBetReducer.reducer,
    cart: cartRecducer.reducer,
    number: numberReducer.reducer,
    save: saveReducer.reducer,
  },
});

export default store;
