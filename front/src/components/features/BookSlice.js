import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import BookServices from "../Services/BookServices"

export const AllDataBook =  createAsyncThunk("AllDataBook", async() =>{
    const response = await BookServices.AllData();
    return response
})

export const AddBook = createAsyncThunk("AddBook", async(item) => {
    const response = await BookServices.AddBook(item);
    return response;
})

const initialState ={
    book:[],
}

const BookSlice = createSlice({
    name:"book",
    initialState,
    extraReducers: (builder) =>{
        builder
        .addCase(AllDataBook.fulfilled,(state,action)=>{
            state.book=action.payload
        })
        .addCase(AddBook.fulfilled,(state,action)=>{
            state.book=[...state.book,action.payload]
        })
    }
})

export default BookSlice.reducer