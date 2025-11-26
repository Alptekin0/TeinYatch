import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface EkstraHizmetState {
     selectedOptions: { [key: string]: boolean }
}

const initialState: EkstraHizmetState = {
     selectedOptions: {},
}

const EkstraHizmetSlice = createSlice({
     name: 'ekstraHizmet',
     initialState,
     reducers: {
          toggleOption: (state, action: PayloadAction<string>) => {
               const optionId = action.payload
               state.selectedOptions[optionId] = !state.selectedOptions[optionId]
          },
          clearSelections: (state) => {
               state.selectedOptions = {}
          },
     },
})

export const { toggleOption, clearSelections } = EkstraHizmetSlice.actions
export default EkstraHizmetSlice.reducer
