import { configureStore } from '@reduxjs/toolkit';
import libraryReducer from './librarySlice';

const store = configureStore({
  reducer: {
    libraryState: libraryReducer,
  },
});

export default store;
