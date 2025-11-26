import { configureStore } from "@reduxjs/toolkit";
import LoadingReducer from "../Slices/LoadingSlice";
import RegisterTypeReducer from "../Slices/RegisterTypeSlice"
import EyeReducer from "../Slices/EyeSlice"
import LoginReducer from "../Slices/LoginSlice"
import AuthReducer from "../Slices/IsAuthSlice"
import IsFavoritedReducer from "../Slices/IsFavoritedSlice"
import MainPageActiveTabReducer from "../Slices/MainPageActiveTabSlice"
import RezervasyonTarihSaatReducer from "../Slices/RezervasyonTarihSaat"
import EkstraHizmetReducer from "../Slices/EkstraHizmetSlice"
import SelectedYatIdReducer from "../Slices/SelectedYat"



export const store = configureStore({
     reducer: {
          loading: LoadingReducer,
          RegisterType: RegisterTypeReducer,
          Eye: EyeReducer,
          Login: LoginReducer,
          Auth: AuthReducer,
          isFavorite: IsFavoritedReducer,
          MainPageActiveTab: MainPageActiveTabReducer,
          RezervasyonTarihSaat: RezervasyonTarihSaatReducer,
          EkstraHizmet: EkstraHizmetReducer,
          YatId: SelectedYatIdReducer,
     }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch