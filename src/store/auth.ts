import { createSlice } from "@reduxjs/toolkit";

interface IUser {
  isAuthenticated: boolean;
  user: any[];
}

const initialAuthState = {
  isAuthenticated: false,
  user: [],
};

const userAuth = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state: IUser, action) {
      const newUser = action.payload;
      state.user.push({ user: newUser[0].user });
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
