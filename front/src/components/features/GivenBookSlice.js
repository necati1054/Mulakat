import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import GivenBookServices from "../Services/GivenBookServices";

export const AllDataGivenBook = createAsyncThunk("AllDataGivenBook", async() => {
    const response = GivenBookServices.AllData();
    return response
})

export const AddGivenBook = createAsyncThunk("AddGivenBook", async(item) => {
    const response = GivenBookServices.AddGivenBook(item)
    return response
})

export const DestroyGivenBooK = createAsyncThunk("DestroyGivenBooK", async(item) => {
    const response = GivenBookServices.DestroyGivenBooK(item)
    return response
})

const initialState = {
    givenbook:[]
}

const GivenBookSlice = createSlice({
    name:"givenbook",
    initialState,
    extraReducers:(builder) =>{
        builder
        .addCase(AllDataGivenBook.fulfilled,(state,action)=>{
            state.givenbook  = action.payload
        })
        .addCase(AddGivenBook.fulfilled,(state,action) => {
            state.givenbook = [...state.givenbook,action.payload]
        })
        .addCase(DestroyGivenBooK.fulfilled,(state,action) => {
            state.givenbook = [...state.givenbook.filter((a)=>a.id !== action.payload)]
        })
    }
})

export default GivenBookSlice.reducer