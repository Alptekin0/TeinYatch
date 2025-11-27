import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     totalPrice : ""
}

const totalPrice = createSlice({
     name : "total",
     initialState,
     reducers : {
          setTotalPrice : ( state, actions ) => {
               state.totalPrice = actions.payload
          }
     }
})

export default totalPrice.reducer;
export const { setTotalPrice } = totalPrice.actions; 