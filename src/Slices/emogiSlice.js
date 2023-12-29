import { createSlice } from "@reduxjs/toolkit";

const emojiSlice = createSlice({
  name: "emoji",
  initialState: {
    emojis: [],
    filteredEmojis: [],
  },
  reducers: {
    setEmojis: (state, action) => {
      state.emojis = action.payload;
    },
    showByCategory: (state, action) => {
      state.filteredEmojis = state.emojis.filter(
        (emoji) => emoji.category === action.payload
      );
    },
  },
});



export const { setEmojis, showByCategory } = emojiSlice.actions;
export const selectAllEmojis = (state) => state.emoji.emojis;
export const selectFilteredEmojis = (state) => state.emoji.filteredEmojis;
export default emojiSlice.reducer;
