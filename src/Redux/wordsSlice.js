import { createSlice } from "@reduxjs/toolkit";

export const wordsSlice = createSlice({
  // 1. задаем имя, его напишем в store
  name: "words",
  // 2. создаем первоначальное состояние
  initialState: {
    selectedCategory: "all",
  },
  // 3. как будем менять состояние:
  // совершаем действия (action) над состоянием (state)
  reducers: {
    filterCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

// создаем и экспортируем константу getSelectedCategory - она хранит в себе первоначальное состояние
export const getSelectedCategory = (state) => state.words.selectedCategory;
// экспортируем созданное действие над состоянием;
export const { filterCategory } = wordsSlice.actions;
export default wordsSlice.reducer;
