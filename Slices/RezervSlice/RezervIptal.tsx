import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  iptalEdilenler: [] as any[],
};

const RezervIptalSlice = createSlice({
  name: "RezervIptal",
  initialState,
  reducers: {
    addIptalEdilen: (state, action) => {
      state.iptalEdilenler.push(action.payload);
    }
  }
});

export const { addIptalEdilen } = RezervIptalSlice.actions;
export default RezervIptalSlice.reducer;
