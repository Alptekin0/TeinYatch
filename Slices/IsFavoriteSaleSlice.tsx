import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoritesState {
     favoritesListSale: any[];
}

const initialState: FavoritesState = {
     favoritesListSale: []
}

const IsFavoritedSlice = createSlice({
     name: "favorities",
     initialState,
     reducers: {
          toggleFavoriteSale: (state, action: PayloadAction<any>) => {
               const productId = action.payload;

               if (state.favoritesListSale.includes(productId)) {
                    state.favoritesListSale = state.favoritesListSale.filter(id => id !== productId);
               } else {
                    state.favoritesListSale.push(productId);
               }
          }
     }
})

export default IsFavoritedSlice.reducer;
export const { toggleFavoriteSale } = IsFavoritedSlice.actions;