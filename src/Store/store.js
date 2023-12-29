import { configureStore } from '@reduxjs/toolkit';
import emogiSlice from '../Slices/emogiSlice';

export const store = configureStore({
  reducer: {
    emogi: emogiSlice,
  },
});

export default store;