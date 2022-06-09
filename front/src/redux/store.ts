import { configureStore } from '@reduxjs/toolkit';
import wordReducer from './wordReducer';

export const store = configureStore({ reducer: { words: wordReducer } });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
