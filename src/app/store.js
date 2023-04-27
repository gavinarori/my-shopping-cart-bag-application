import { configureStore } from '@reduxjs/toolkit';
import slideReducer from '../features/slices/sliderSlice';
import itemReducer from '../features/slices/itemSlice'


export const store = configureStore({
  reducer: {
    slider: slideReducer,
    item: itemReducer,
  },
});
