import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    NameData:"",
}

export const NameSlice = createSlice({
    name:"Name",
    initialState,
    reducers:{
        update:(state,action) => {
            state.NameData=action.payload;
        }
    }
});

export const {update} = NameSlice.actions; 

export default  NameSlice.reducer