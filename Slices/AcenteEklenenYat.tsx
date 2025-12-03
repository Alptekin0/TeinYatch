import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     yatlar: [] as any[],
};

const AcenteEklenenYat = createSlice({
     name: "Yatlar",
     initialState,
     reducers: {
          AddYat: (state, action: any) => {
               state.yatlar.push({
                    id: Date.now().toString(),
                    ...action.payload
               });
          }
     }
});

export const { AddYat } = AcenteEklenenYat.actions;
export default AcenteEklenenYat.reducer;