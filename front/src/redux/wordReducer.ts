import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { Word } from '../interfaces';
import api from '../apis/api';

const wordListApi = api.get('wordList');

type wordState = {
  value: Word[];
};

const initialState: wordState = {
  value: [],
};

export const getWordApi = createAsyncThunk('words/initState', async () => wordListApi.get());

export const wordSlice = createSlice({
  name: 'words',
  initialState,
  reducers: {
    addWord: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    removeWord: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWordApi.fulfilled, (state, action) => {
        const setState = state;
        setState.value = action.payload;
      })
      .addCase(getWordApi.pending, (state, action) => {
        // pending..
      });
  }, // 다른 미들웨어
});
export const { addWord, removeWord } = wordSlice.actions;
export default wordSlice.reducer;
