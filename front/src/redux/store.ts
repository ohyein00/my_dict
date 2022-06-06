import { configureStore } from '@reduxjs/toolkit';
import wordReducer from './word';

export const store = configureStore({
  reducer: {
    words: wordReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
