import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import NameReducer from './Slices/NameSlice'

export const store = configureStore({
    reducer:{
        Name:NameReducer,
    },
});

export default store