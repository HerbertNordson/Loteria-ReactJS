import { createSlice } from "@reduxjs/toolkit";

interface IUser {
  isAuthenticated: boolean;
  user: object[];
}

const initialAuthState = {
  isAuthenticated: false,
  user: [
    {
      login: "Herbert Nordson",
      email: "herbert_nordson@hotmail.com",
      password: "admin123",
    },
  ],
};

const userAuth = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state: IUser) {
      state.isAuthenticated = true;
      localStorage.setItem("isLoggedIn", "1");
    },
    logout(state: IUser) {
      state.isAuthenticated = false;
      localStorage.removeItem("isLoggedIn");
    },
    register(state: IUser, action): void {
      const newUser = action.payload;
      console.log(newUser);
      state.user.push({
        login: newUser.login,
        email: newUser.email,
        password: newUser.password,
      });
    },
  },
});

export const authActions = userAuth.actions;

export default userAuth;
