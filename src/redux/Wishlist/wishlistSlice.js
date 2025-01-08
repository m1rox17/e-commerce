import { createSlice } from "@reduxjs/toolkit";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase-config";
import { auth } from "../../../firebase-config";

const initialState = {
  items: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    setWishlist(state, action) {
      state.items = action.payload;
    },
    addItemWishlist(state, action) {
      const findItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (findItem) {
        findItem.cound++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
    },
    removeItemWishlist(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { setWishlist, addItemWishlist, removeItemWishlist } =
  wishlistSlice.actions;

export const fetchWishlist = () => async (dispatch) => {
  const user = auth.currentUser;
  if (!user) {
    console.log("Not user");
    return;
  }

  const docRef = doc(db, "wishlist", user.uid);
  const docSnap = await getDoc(docRef);

  if (docSnap != "undefined") {
    dispatch(setWishlist(docSnap.data().items));
  } else {
    console.log("Wishlist clear");
  }
};

export const syncWishlist = (items) => async () => {
  const user = auth.currentUser;
  if (!user) {
    console.log("Not user");
    return;
  }

  const docRef = doc(db, "wishlist", user.uid);
  await setDoc(docRef, { items });
};

export default wishlistSlice.reducer;
