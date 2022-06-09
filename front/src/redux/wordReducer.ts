import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { Word } from '../interfaces';
import api from '../apis/api';
import { RootState } from './store';

const wordListApi = api.get('wordList');

type wordState = {
  value: Word[];
};

const initialState: wordState = { value: [] };

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
    editWord: (state, action) => {
      const { id, word, description, example } = action.payload;
      state.value.forEach((item) => {
        if (Number(item.id) === Number(id)) {
          item.id = id;
          item.word = word;
          item.description = description;
          item.example = example;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWordApi.fulfilled, (state, action) => {
        const setState = state;
        setState.value = action.payload;
      })
      .addCase(getWordApi.pending, (state, action) => {});
  }, // 다른 미들웨어
});
export const { addWord, removeWord, editWord } = wordSlice.actions;
export const wordListState = (state: RootState) => state.words.value;
export default wordSlice.reducer;
