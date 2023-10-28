import { configureStore } from '@reduxjs/toolkit'
import DataSlice from './slices/DataSlice';


export const store = configureStore({
  reducer: {
    storeData : DataSlice,
  }
})