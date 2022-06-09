import React, { useCallback } from 'react';
import WordBox from 'components/WordBox';
import { useNavigate } from 'react-router-dom';
import { getWordApi, removeWord, wordListState } from 'redux/wordReducer';
import { useAppSelector, useAppDispatch } from '../../hooks/storeHooks';
import { checkSelectorGetApi } from '../../hooks/useWordSelector';
import { WordContainer, WordListFrame, Title, FlexTitleBox, TopButton, WordBoxContainer } from './styles';

function WordList() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const wordSelector = useAppSelector(wordListState);
  checkSelectorGetApi(wordSelector, getWordApi);
  const deleteWordFC = useCallback((id?: number | undefined) => {
    dispatch(removeWord(id));
  }, []);
  const editWordFC = (id) => {
    navigate(`/write/${id}`);
  };

  return (
    <WordContainer>
      <WordListFrame>
        <FlexTitleBox>
          <Title>나만의 단어장</Title>
          <TopButton type="button" onClick={() => navigate('/write')} strong="hard" size="l">
            단어 쓰기
          </TopButton>
        </FlexTitleBox>
        <WordBoxContainer>
          {wordSelector.map((word) => (
            <WordBox key={word.id} id={word.id} word={word} deleteWord={deleteWordFC} editWord={editWordFC} />
          ))}
        </WordBoxContainer>
      </WordListFrame>
    </WordContainer>
  );
}

export default WordList;

// ## useEffect -----------------------------------------
// componentDidMount : 빈배열을 넘겨서 마운트시에만 사용됨
// deps에 조건을 넘겨주면 componentDidUpdate,getDerivedStateFromProps와 동일
// return으로 clean-up을 주면 componentWillUnMount가 됨
// -------------------------------------------- ----------
