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
import TotalPriceReducer from "../Slices/TotalPrice"
import RezervYatReducer from "../Slices/RezervSlice/RezervYat"
import GecmisRezervReducer from "../Slices/RezervSlice/GecmisRezervSlice"
import RezervYatOnaylananReducer from "../Slices/RezervSlice/RezervYatOnaylananSlice"
import IsFavoriteSaleReducer from "../Slices/IsFavoriteSaleSlice"
import KisiSayisiReducer from "../Slices/RezervSlice/KisiSayisiSlice"
import AcenteTamamlananReducer from "../Slices/AcenteTamamlananSlice"
import YatEkleBilgileriReducer from "../Slices/YatEkleBilgileriSlice"
import AcenteEklenenYatReducer from "../Slices/AcenteEklenenYat"
import RezervIptalReducer from "../Slices/RezervSlice/RezervIptal"



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
          TotalPrice: TotalPriceReducer,
          RezervYat: RezervYatReducer,
          GecmisRezerv: GecmisRezervReducer,
          RezervYatOnaylanan: RezervYatOnaylananReducer,
          IsFavoriteSale: IsFavoriteSaleReducer,
          KisiSayisi: KisiSayisiReducer,
          Tamamlanan: AcenteTamamlananReducer,
          YatEkleBilgileri: YatEkleBilgileriReducer,
          AcenteEklenenYat: AcenteEklenenYatReducer,
          RezervIptal: RezervIptalReducer,
     }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch