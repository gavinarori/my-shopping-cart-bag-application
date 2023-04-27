import {createSlice} from 'react-redux'
import { allData } from '../../assests/data/chunkData'

const itemSlice = createSlice({
    name:'items',
    initialState:{
        filteredItems:
        JSON.parse(sessionStorage.getItem('filteredData'))|| allData,
        singleItems:
        JSON.parse(sessionStorage.getItem('singleItems'))||allData,
        error:false
    },
    reducers:{
        filterItems(state,action){
            try {
                const filter = allData.filter(
                  (items) => items.type === action.payload
                );
                state.filteredItems = filter
                state.error = false
                const savedState = JSON.stringify(filter);
                sessionStorage.setItem('filteredData',savedState)

            }catch (err) {
                return err;
              }
        },
        singleItem(state,action){
            try{
                const singleproduct = state.filteredItems.filter((item)=> item.id === action.payload)
                state.singleItems = singleproduct
                state.error = false
                const savedState = JSON.stringify(singleproduct)
                sessionStorage.setItem('singleItems',savedState)
            }catch (err) {
                return err;
              }
        },
        filterByGender(state,action){
            try{
                const gender = state.filteredItems.filter((item)=> item.gender ===action.payload)
                state.error = false
                state.filteredItems = gender
                const oneGender = gender.length > 0;
                if(oneGender){
                    state.error = false
                    const savedState = JSON.stringify(gender)
                    sessionStorage.setItem('filteredData',savedState)
                    
                }
            }catch (err) {
                return err;
              }
        },
        sortBySize(state,action){
            try{
                const bySize = state.filteredItems.filter((items)=> items.size.includes(action.payload))
                state.error =false
                state.filterItems = bySize
                if(bySize <= 0){
                    state.error = true
                    state.filteredItems=[]
                }else{
                    state.error = false
                    state.filteredItems= bySize
                    const savedState = JSON.stringify(bySize)
                    sessionStorage.setItem('filteredData',savedState)
                }
            }catch(err){
                return err
            }
        },
        sortByColor(state,action){
            try{
                const byColor = state.filteredItems.filter((items)=> items.color.includes(action.payload))
                state.error = false
                state.filteredItems = byColor
                if(byColor <= 0){
                    state.error = true
                    state.filteredItems =[]
                }else{
                    state.error= false
                    state.filteredItems = byColor
                    const savedState = JSON.stringify(byColor)
                    sessionStorage.setItem('filteredData',savedState)
                }

            }catch(err){
                return err
            }
        },
        sortByPrice(state){
            try{
                const price = state.filteredItems.sort((a, b) =>
          a.price > b.price ? -1 : 1
        );
        state.filteredItems = price;
        let count = price.length;
        if (count > 1) {
          const noError = false;
          state.error = noError;
          if (!noError) {
            state.filteredItems = price;
            const saveState = JSON.stringify(price);
            sessionStorage.setItem("filteredData", saveState);
          }
        } else {
          state.error = true;
          state.filteredProducts = [];
        }
            }catch(err){
                return err
            }
        }

    }
})

export const {filterItems,singleItem,filterByGender,sortBySize,sortByColor,sortByPrice} = itemSlice.actions
export default itemSlice.reducers