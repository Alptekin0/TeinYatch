import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     activeTab: 'kiralik',
}

const MainPageActiveTabSlice = createSlice({
     name: "TabBar",
     initialState,
     reducers: {
          setActiveBar: (state, actions) => {
               state.activeTab = actions.payload
          }
     }
})

export default MainPageActiveTabSlice.reducer;
export const { setActiveBar } = MainPageActiveTabSlice.actions;