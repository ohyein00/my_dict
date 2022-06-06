import { createSlice } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { CommonResponse, Word } from '../interfaces';
import api from '../apis/api';

const wordListApi = api.get('wordList');

interface initialWord extends Word {
  value: Word[];
}
let initialState: initialWord;
wordListApi.get().then((res: AxiosResponse) => {
  const wordList: Word[] = res.data;
  initialState.value.push(...wordList);
});

export const wordSlice = createSlice({
  name: 'word',
  initialState,
  reducers: {
    edit: (state, action) => {
      const wordState = state;
      wordState.values = action.payload;
      console.log(wordState, 'wordstate');
    },
  },
});

export default wordSlice.reducer;
// https://cocoder16.tistory.com/65
// https://redux-toolkit.js.org/tutorials/typescript
// https://velog.io/@mael1657/Redux-toolkit%EC%9C%BC%EB%A1%9C-%EC%83%81%ED%83%9C%EA%B4%80%EB%A6%AC%ED%95%98%EA%B8%B0
