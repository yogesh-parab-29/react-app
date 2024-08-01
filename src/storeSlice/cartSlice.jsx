import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    restaurantId: null,
    resCheck: 0,
  },
  reducers: {
    addItems: (state, action) => {
      const { itemCount, ...rest } = action.payload;

      const existingItemIndex = state.items.findIndex(
        (item) => item.info.id === action.payload.info.id
      );
      console.log(existingItemIndex);
      if (state.resCheck == 0) {
        if (existingItemIndex !== -1) {
          state.items[existingItemIndex].itemCount++;
        } else {
          state.items.push({ ...action.payload, itemCount: 1 });
        }
      }
    },
    removeItems: (state, action) => {
      const { itemCount, ...rest } = action.payload;
      const findItemIndex = state.items.findIndex(
        (item) => item.info.id === action.payload.info.id
      );
      if (findItemIndex !== -1) {
        if (state.items[findItemIndex].itemCount > 1) {
          state.items[findItemIndex].itemCount--;
        } else {
          state.items.splice(findItemIndex, 1);
        }
      }
    },
    clearCart: (state, action) => {
      state.items = [];
    },
    restaurantCheck: (state, action) => {
      // console.log(state.resCheck);
      // console.log(state.restaurantId);
      const { id } = action.payload;
      if (state.restaurantId === null) {
        state.restaurantId = id;
        // console.log(state.restaurantId);
      } else {
        state.resCheck = state.restaurantId === id ? 0 : 1;
      }
    },
    resChangeAccept: (state, action) => {
      const { id } = action.payload;
      state.items = [];
      state.items.push({ ...action.payload, itemCount: 1 });
      state.resCheck = 0;
      state.restaurantId = id;
    },
    resChangeDecline: (state, action) => {
      state.resCheck = 0;
    },
  },
});

export const {
  addItems,
  removeItems,
  clearCart,
  restaurantCheck,
  resChangeAccept,
  resChangeDecline,
} = cartSlice.actions;

export default cartSlice.reducer;
