import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import PersonServices from "../Services/PersonServices";

export const AllDataPerson = createAsyncThunk("AllDataPerson",async()=>{
    const response = await PersonServices.AllData();
    return response.data
})

export const AddPerson = createAsyncThunk("AddPerson",async(item)=>{
    const response = PersonServices.AddPerson(item)
    return response
})

const initialState ={
    person:[]
}

const PersonSlice = createSlice({
    name:"person",
    initialState,
    extraReducers: (builder) =>{
        builder
        .addCase(AllDataPerson.fulfilled,(state,action)=>{
            state.person = action.payload
        })
        .addCase(AddPerson.fulfilled,(state,action)=>{
            state.person = [...state.person,action.payload]
        })
    }
})

export default PersonSlice.reducer