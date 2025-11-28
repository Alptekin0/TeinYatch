import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     gecmisRezerv: []
}

const GecmisRezerv = createSlice({
     name: "GecmisRezerv",
     initialState,
     reducers: {
          setGecmisRezerv: (state, action) => {
               state.gecmisRezerv = action.payload;
          }
     }
})

export default GecmisRezerv.reducer;
export const { } = GecmisRezerv.actions;