import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     isAuth: false,
     isAuthAcente : false,
}

const IsAuthSlice = createSlice({
     name: "Auth",
     initialState,
     reducers: {
          setIsAuth: (state, actions) => {
               state.isAuth = actions.payload;
          },
          setIsAuthAcente: (state, actions) => {
               state.isAuthAcente = actions.payload;
          }
     }
})

export default IsAuthSlice.reducer;
export const { setIsAuth, setIsAuthAcente } = IsAuthSlice.actions;