import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice.js';
import filterReducer from './slices/filterSlice.js';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    filters: filterReducer
  }
});
