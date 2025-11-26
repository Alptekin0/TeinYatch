import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     yatId: []
}

const SelectedYat = createSlice({
     name: "yatId",
     initialState,
     reducers: {
          setYatId: (state, actions) => {
               state.yatId = actions.payload;
          }
     }
})

export default SelectedYat.reducer;
export const { setYatId } = SelectedYat.actions;