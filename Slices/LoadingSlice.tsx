import { createSlice } from "@reduxjs/toolkit";


export interface LoadingProps {
     isLoading: boolean
}

const initialState: LoadingProps = {
     isLoading: false
}

const LoadingSlice = createSlice({
     name: "loading",
     initialState,
     reducers: {

          setIsLoading: (state, action) => {
               state.isLoading = action.payload
          }

     }
})

export default LoadingSlice.reducer
export const { setIsLoading } = LoadingSlice.actions