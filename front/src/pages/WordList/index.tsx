import React, { useCallback, useEffect } from 'react';
import WordBox from 'components/WordBox';
import { useNavigate } from 'react-router-dom';
import { getWordApi, addWord, removeWord } from '../../redux/wordReducer';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import { Word } from '../../interfaces';

function WordList() {
  const wordSelector = useAppSelector((state) => state.words.value);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (wordSelector.length < 1) {
      dispatch(getWordApi());
    }
  }, []);
  // @ts-ignore
  const deleteWord = useCallback((id?: any) => {
    dispatch(removeWord(id));
  }, []);
  return (
    <div>
      <button type="button" onClick={() => navigate('/write')}>
        단어 쓰기
      </button>
      {wordSelector.map((word) => (
        <WordBox key={word.id} word={word} deleteWord={deleteWord} />
      ))}
    </div>
  );
}

export default WordList;

// ## useEffect -----------------------------------------
// componentDidMount : 빈배열을 넘겨서 마운트시에만 사용됨
// deps에 조건을 넘겨주면 componentDidUpdate,getDerivedStateFromProps와 동일
// return으로 clean-up을 주면 componentWillUnMount가 됨
// -------------------------------------------- ----------
