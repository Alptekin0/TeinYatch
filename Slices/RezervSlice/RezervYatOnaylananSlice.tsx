import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     OnaylananYat: []
}

const RezervYatOnaylananSlice = createSlice({
     name: 'Onay',
     initialState,
     reducers: {
          setOnaylananYat: (state, action) => {
               state.OnaylananYat = action.payload
          }
     }
})

export default RezervYatOnaylananSlice.reducer;
export const { setOnaylananYat } = RezervYatOnaylananSlice.actions;