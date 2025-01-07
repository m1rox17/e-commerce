import { createSlice } from "@reduxjs/toolkit";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase-config";
import { auth } from "../../../firebase-config";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart(state, action) {
      state.items = action.payload;
    },
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
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { setCart, addItem, removeItem } = cartSlice.actions;

export const fetchCart = () => async (dispatch) => {
  const user = auth.currentUser;
  if (!user) {
    console.log("Not user");
    return;
  }

  const docRef = doc(db, "carts", user.uid);
  const docSnap = await getDoc(docRef);

  if (docSnap != "undefined") {
    dispatch(setCart(docSnap.data().items));
  } else {
    console.log("Cart clear");
  }
};

export const syncCart = (items) => async () => {
  const user = auth.currentUser;
  if (!user) {
    console.log("Not user");
    return;
  }

  const docRef = doc(db, "carts", user.uid);
  await setDoc(docRef, { items });
};

export default cartSlice.reducer;
