import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cart:[],
        amount:0,
        totalAmount:0,
        totalPrice:0,
    },
    reducers:{
        addToCart(state,action){
            const itemId = action.payload
            try{
                const Now = state.cart.find(
                    (item)=> item.id === itemId.id &&
                            item.size === itemId.size &&
                            item.color === itemId.color
                );
                if (Now) {
                    Now.amount++;
                    Now.totalPrice += itemId.price;
                    state.totalAmount++;
                    state.totalPrice += itemId.price;
                  } else {
                    state.cart.push({
                      id: itemId.id,
                      price: itemId.price,
                      size: itemId.size,
                      amount: 1,
                      img: itemId.img,
                      totalPrice: itemId.price,
                      name: itemId.name,
                      text: itemId.text,
                      color: itemId.color,
                    });
                    state.totalAmount++;
                    state.totalPrice += itemId.price;
                  }
            }catch(err){
                return err
            }
        },
        removeFromCart(state, action) {
            const itemId = action.payload;
            try {
              const Now = state.cart.find(
                (item) =>
                item.id === itemId.id &&
                item.size === itemId.size &&
                item.color === itemId.color
              );
              if (Now.amount === 1) {
                state.cart = state.cart.filter(
                  (item) =>
                  item.id !== itemId.id ||
                  item.size !== itemId.size ||
                  item.color !== itemId.color
                );
                state.totalAmount--;
                state.totalPrice -= itemId.price;
              } else {
                Now.amount--;
                Now.totalPrice -= itemId.price;
                state.totalAmount--;
                state.totalPrice -= itemId.price;
              }
            } catch (err) {
              return err;
            }
          },
    }
})

export const{addToCart,removeFromCart} = cartSlice.actions
export default cartSlice.reducer