import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import notesService from './notesService'

const initialState = {
    notes:[],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message:''
}

//Create new goal
export const createNotes = createAsyncThunk('notes/create', async(noteData, thunkAPI)=> {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await notesService.createNotes(noteData,token)
    }catch(error){
        const message = (error.response && error.response.data && error.response.data.message) || error.message||
        error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


//Get user goals
export const getNotes = createAsyncThunk('notes/getAll', async (_, thunkAPI)=>{
    try{
        const token = thunkAPI.getState().auth.user.token
        return await notesService.getNotes(token)
    }catch(error){
        const message = (error.response && error.response.data && error.response.data.message) || error.message||
        error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const noteSlice = createSlice({
    //notes originally changing because of potential naming variable conflicts
    name: 'note',
    initialState,
    reducers: {
        reset: (state)=> initialState
    },
    extraReducers: (builder)=>{
       builder
       .addCase(createNotes.pending, (state)=>{
           state.isLoading = true
       })
       .addCase(createNotes.fulfilled, (state,action)=>{
        state.isLoading = false
        state.isSuccess = true
        state.notes.push(action.payload)
       })
       .addCase(createNotes.rejected, (state,action)=>{
        state.isLoading = false
        state.isError = true
        state.message = action.payload
       })
       .addCase(getNotes.pending, (state)=>{
        state.isLoading = true
    })
    .addCase(getNotes.fulfilled, (state,action)=>{
     state.isLoading = false
     state.isSuccess = true
     state.notes = action.payload
    })
    .addCase(getNotes.rejected, (state,action)=>{
     state.isLoading = false
     state.isError = true
     state.message = action.payload
    })


       }
    }
)

export const {reset} = noteSlice.actions
export default noteSlice.reducer