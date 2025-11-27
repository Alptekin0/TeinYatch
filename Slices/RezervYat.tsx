import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Yat {
  id: number;
  title: string;
  location: string;
  people: number;
  price: number;
  rating: number;
  images: number[];
}

interface RezervYatState {
  RezervYat: Yat[];
}

const initialState: RezervYatState = {
  RezervYat: [],
};

const RezervYat = createSlice({
  name: 'Rezerv',
  initialState,
  reducers: {
    addRezervYat: (state, action: PayloadAction<Yat | Yat[]>) => {
      if (Array.isArray(action.payload)) {
        state.RezervYat.push(...action.payload); // array ise hepsini ekle
      } else {
        state.RezervYat.push(action.payload); 
      }
    },
    clearRezervYat: (state) => {
      state.RezervYat = [];
    }
  },
});

export default RezervYat.reducer;
export const { addRezervYat, clearRezervYat } = RezervYat.actions;
