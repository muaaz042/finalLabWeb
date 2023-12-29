import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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


export const fetchEmojis = createAsyncThunk(
  'emojis/fetchEmojis',
  async () => {
    const response = await fetch('https://raw.githubusercontent.com/cheatsnake/emojihub/master/emojistore/data/emojibase.json');
    const data = await response.json();
    return data;
  }
);


export const { setEmojis, showByCategory } = emojiSlice.actions;
export const selectAllEmojis = (state) => state.emoji.emojis;
export const selectFilteredEmojis = (state) => state.emoji.filteredEmojis;
export default emojiSlice.reducer;
