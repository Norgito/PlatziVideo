import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counter/counterSlice'
import { itemSlice } from './slices/items/itemSlice'

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        item: itemSlice.reducer,
    },
})