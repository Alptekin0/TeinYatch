import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     isAuth: false,
}

const IsAuthSlice = createSlice({
     name: "Auth",
     initialState,
     reducers: {
          setIsAuth: (state, actions) => {
               state.isAuth = actions.payload;
          }
     }
})

export default IsAuthSlice.reducer;
export const { setIsAuth } = IsAuthSlice.actions;