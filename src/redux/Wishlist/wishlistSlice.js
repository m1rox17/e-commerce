import { createSlice } from "@reduxjs/toolkit";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase-config";
import { auth } from "../../../firebase-config";

const initialState = {
  itemsWishlist: []
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    setWishlist(state, action) {
      state.itemsWishlist = action.payload;
    },
    addItemWishlist(state, action) {
      const findItem = state.itemsWishlist.find(
        (item) => item.id === action.payload.id
      );

      if (findItem) {
        findItem.count++;
      } else {
        state.itemsWishlist.push({ ...action.payload, count: 1 });
      }
    },
    removeItemWishlist(state, action) {
      state.itemsWishlist = state.itemsWishlist.filter((item) => item.id !== action.payload.id);
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
    dispatch(setWishlist(docSnap.data().itemsWishlist));
  } else {
    console.log("Wishlist clear");
  }
};

export const syncWishlist = (itemsWishlist) => async () => {
  const user = auth.currentUser;
  if (!user) {
    console.log("Not user");
    return;
  }

  const docRef = doc(db, "wishlist", user.uid);
  await setDoc(docRef, { itemsWishlist });
};

export default wishlistSlice.reducer;
