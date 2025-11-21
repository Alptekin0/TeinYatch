import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     email: "",
     sifre: ""
}

const LoginSlice = createSlice({
     name: "Login",
     initialState,
     reducers: {
          setEmail: (state, actions) => {
               state.email = actions.payload
          },
          setSifre: (state, actions) => {
               state.sifre = actions.payload
          }
     }
})

export default LoginSlice.reducer;
export const { setEmail, setSifre } = LoginSlice.actions;