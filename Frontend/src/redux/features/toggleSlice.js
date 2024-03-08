import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isClicked : false
}

const toggleSlice = createSlice({
    name:'ToggleSlice',
    initialState,
    reducers:{
        setToggle:(state,action)=>{
            state.isClicked = !action.payload
        }
    }
})

export const {setToggle} = toggleSlice.actions
export default toggleSlice.reducer
