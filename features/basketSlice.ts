import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'
import { Basket } from '../typings'

const initialState: Basket = {
  items: []
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items.push(action.payload);
    },
  }
})

export const {addToBasket} = basketSlice.actions
export const selectItems = (state: RootState) => state.basket.items

export default basketSlice.reducer