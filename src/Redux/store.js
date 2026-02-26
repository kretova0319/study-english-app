import { configureStore } from "@reduxjs/toolkit";
import favorites from "./favoritesSlice";
import words from "./wordsSlice"

export const store = configureStore({
  reducer: {
    words: words,
    favorites: favorites,
  },
});
