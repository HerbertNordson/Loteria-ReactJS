import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
};

const userAuth = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
      localStorage.setItem("isLoggedIn", "1");
    },
    logout(state) {
      state.isAuthenticated = false;
      localStorage.removeItem("isLoggedIn");
    },
  },
});

export const authActions = userAuth.actions;

export default userAuth;
