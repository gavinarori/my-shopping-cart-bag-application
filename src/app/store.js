import { configureStore } from '@reduxjs/toolkit';
import sliderSlice from '../features/slices/sliderSlice';


export const store = configureStore({
  reducer: {
    sliderReducer:sliderSlice,
  },
});
