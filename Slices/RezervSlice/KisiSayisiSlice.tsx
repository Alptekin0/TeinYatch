import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     Kisisayisi: 1
}

const kisiSayisiSlice = createSlice({
     name: "kisiSayisi",
     initialState,
     reducers: {
          setKisiSayisiPlus: (state) => {
               state.Kisisayisi += 1;
          },
          setKisiSayisiMinus: (state) => {
               state.Kisisayisi = state.Kisisayisi > 1 ? state.Kisisayisi - 1 : 1;
          }

     }
})

export default kisiSayisiSlice.reducer;
export const { setKisiSayisiPlus, setKisiSayisiMinus } = kisiSayisiSlice.actions;