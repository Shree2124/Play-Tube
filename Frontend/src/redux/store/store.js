import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from '../features/toggleSlice';
import userReducer from '../features/userSlice';

export const store = configureStore({
    reducer:{
        toggle:toggleReducer ,
        auth:userReducer    
    }
})
