import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    notes:[],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message:''
}

export const goalSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        reset: (state)=> initialState
    }
})

export const {reset} = goalSlice.actions
export default goalSlice.reducer