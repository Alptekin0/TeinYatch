import { createSlice } from "@reduxjs/toolkit";

const initialState: { list: any[] } = {
     list: []
}


const TamamlananSlice = createSlice({
     name: "Tamamlanan",
     initialState,
     reducers: {
          addTamamlanan: (state, action) => {
               state.list.push(action.payload);
          }
     }
});

export const { addTamamlanan } = TamamlananSlice.actions;
export default TamamlananSlice.reducer;
