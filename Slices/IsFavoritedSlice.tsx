import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoritesState {
     favoritesList: any[];
}

const initialState: FavoritesState = {
     favoritesList: []
}

const IsFavoritedSlice = createSlice({
     name: "favorities",
     initialState,
     reducers: {
          toggleFavorite: (state, action: PayloadAction<any>) => {
               const productId = action.payload;

               if (state.favoritesList.includes(productId)) {
                    state.favoritesList = state.favoritesList.filter(id => id !== productId);
               } else {
                    state.favoritesList.push(productId);
               }
          }
     }
})

export default IsFavoritedSlice.reducer;
export const { toggleFavorite } = IsFavoritedSlice.actions;