// Slices/RezervasyonTarihSaat.ts

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  startDate: null as string | null,
  endDate: null as string | null,
  startTime: null as string | null,
  endTime: null as string | null,
};

const RezervasyonTarihSaat = createSlice({
  name: "RezervTarih",
  initialState,
  reducers: {
    setStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action) => {
      state.endDate = action.payload;
    },
    setStartTime: (state, action) => {
      state.startTime = action.payload;
    },
    setEndTime: (state, action) => {
      state.endTime = action.payload;
    },
  },
});

export default RezervasyonTarihSaat.reducer;
export const { setStartDate, setEndDate, setStartTime, setEndTime } = RezervasyonTarihSaat.actions;
