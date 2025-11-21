import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     eye: true,
     eye2: true
}

const EyeSlice = createSlice({
     name: "eye",
     initialState,
     reducers: {
          setEye: (state, actions) => {
               state.eye = actions.payload;
          },
          setEye2: (state, actions) => {
               state.eye2 = actions.payload;
          },
     }
})

export default EyeSlice.reducer;
export const { setEye, setEye2 } = EyeSlice.actions;