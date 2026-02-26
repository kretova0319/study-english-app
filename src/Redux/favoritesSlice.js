import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
  name: "favorites",
  // создаем первоначальное состояние
  initialState: {
    favoritesItems: [],
  },
  // создаем функцию, чтобы менять состояние (1 - добавлять, 2 - удалять).
  reducers: {
    // addItemToFavorites: (state, action) => {
    //   state.favoritesItems.push(action.payload);
    // },
    removeItemFromFavorites: (state, action) => {
      state.favoritesItems = state.favoritesItems.filter(
        (favoritesItem) => favoritesItem.id !== action.payload.favoritesItemId,
      );
    },

    // чтоб повторно не добавлялось слово и не рос счетчик избранного
    addItemToFavorites: (state, action) => {
      const existingItem = state.favoritesItems.find(
        (item) => item.id === action.payload.id,
      );

      if (!existingItem) {
        state.favoritesItems.push(action.payload);
      }
    },
  },
});

export const getFavoritesItems = (state) => state.favorites.favoritesItems;
export const { addItemToFavorites, removeItemFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
