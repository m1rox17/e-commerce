import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (findItem) {
        findItem.cound++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
    },
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
