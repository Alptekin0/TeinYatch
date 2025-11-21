import { configureStore } from "@reduxjs/toolkit";
import LoadingReducer from "../Slices/LoadingSlice";
import RegisterTypeReducer from "../Slices/RegisterTypeSlice"
import EyeReducer from "../Slices/EyeSlice"
import LoginReducer from "../Slices/LoginSlice"
import AuthReducer from "../Slices/IsAuthSlice"

export const store = configureStore({
     reducer: {
          loading: LoadingReducer,
          RegisterType: RegisterTypeReducer,
          Eye: EyeReducer,
          Login: LoginReducer,
          Auth: AuthReducer, 
     }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch