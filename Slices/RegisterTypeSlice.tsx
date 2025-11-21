import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     RegisterType: true,
}


const RegisterTypeSlice = createSlice({
     name: "Type",
     initialState,
     reducers: {
          setRegisterType: (state, action) => {
               state.RegisterType = action.payload;
          }
     }
})

export default RegisterTypeSlice.reducer;
export const { setRegisterType } = RegisterTypeSlice.actions;