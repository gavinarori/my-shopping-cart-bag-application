import { createSlice } from "@reduxjs/toolkit";
import SliderData from '../../assests/data/chunkData'

export const sliderSlice = createSlice({
    name:'slider',
    initialState:{
        value: 0,
        length:SliderData.length,
    },
    reducers:{
        leftSlide(state,action){
            state.value = action.payload < state.length -1 ? 0 : action.payload
        },
        rightSlide(state,action){
            state.value = action.payload > state.length -1 ? 0 : action.payload
        },
        dotSlide(state,action){
            const slide = action.payload
            state.value = slide
        }


    }
})

export const {leftSlide,rightSlide,dotSlide} =sliderSlice.actions
export default sliderSlice.reducer