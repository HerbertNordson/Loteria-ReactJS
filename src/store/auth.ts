import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export interface IUser {
  isAuthenticated: boolean;
  user: object[];
  actualUser: object[];
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
  actualUser: [],
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
      state.user.push({
        login: newUser.login,
        email: newUser.email,
        password: newUser.password,
      });
    },
    actUser(state: IUser, action) {
      const userAtt = action.payload;
      state.user.map((item: any) => {
        if (userAtt === item.email) {
          state.actualUser.push({
            login: item.login,
            email: item.email,
            password: item.password,
          });
        }
      });
    },
    altLogin(state: IUser, action) {
      const newLogin = action.payload;
      state.user.map((item: any) => {
        if (item.email === newLogin.email) {
          item.login = newLogin.name;
          state.actualUser.map((att: any) => (att.login = newLogin.name));
        }
      });
    },
    altEmail(state: IUser, action) {
      const newEmail = action.payload;
      state.user.map((item: any) => {
        if (item.email === newEmail.emailOld) {
          item.email = newEmail.email;
          state.actualUser.map((att: any) => (att.email = newEmail.email));
        }
      });
    },
    altPassword(state: IUser, action) {
      const newPass = action.payload;
      state.user.map((item: any) => {
        if (item.email === newPass.email) {
          item.password = newPass.password;
          state.actualUser.map((att: any) => (att.password = newPass.password));
        }
      });
    },
  },
});

export const authActions = userAuth.actions;

export default userAuth;
