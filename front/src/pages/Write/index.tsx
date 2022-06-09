import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import WriteInput from '../../components/Write/Input';
import { useAppSelector } from '../../hooks/storeHooks';
import { addWord, editWord, getWordApi, wordListState } from '../../redux/wordReducer';
import { checkSelectorGetApi } from '../../hooks/useWordSelector';
import { useValidationInput } from '../../hooks/useCheckError';

type resultDataType = {
  id: number;
  word?: string;
  description?: string;
  example?: string;
};
type InputProps = {
  label: string;
  name: string;
  type: string;
  ref: React.MutableRefObject<HTMLInputElement>;
};

function WriteForm() {
  const navigate = useNavigate();
  const paramsWord = useParams();
  const wordSelector = useAppSelector(wordListState);
  const dispatch = useDispatch();
  checkSelectorGetApi(wordSelector, getWordApi);
  // form 데이터값 초기설정
  const inputItems: InputProps[] = [
    {
      label: '단어',
      name: 'word',
      type: 'text',
      ref: useRef(),
    },
    {
      label: '뜻',
      name: 'description',
      type: 'text',
      ref: useRef(),
    },
    {
      label: '예문',
      name: 'example',
      type: 'text',
      ref: useRef(),
    },
  ];
  // 데이터 수정시 INPUT에 이전 DATA 넣어주기
  if (paramsWord.id) {
    useEffect(() => {
      const editWordData = wordSelector.filter((item) => item.id === Number(paramsWord.id));
      if (editWordData.length > 0) {
        inputItems.forEach((item) => {
          item.ref.current.value = editWordData[0][item.name];
        });
      }
    });
  }
  // 인풋 빈 값 벨리데이션, 빈 값일 경우 에러문구와 함께 throw
  const checkInputValidation = (resultData) => {
    let validationResult: string | boolean;
    Object.keys(resultData).forEach((key, index) => {
      if (index > 0) {
        validationResult = useValidationInput(resultData[key], inputItems[index - 1].label);
        if (validationResult !== false) {
          throw validationResult;
        }
      }
    });
  };
  // dispatch할 결과값에 수정/새로작성 id 분기처리
  const makeWordId = (checkWordIdParam) => {
    if (checkWordIdParam !== undefined) {
      return checkWordIdParam;
    }
    return wordSelector[wordSelector.length - 1].id + 1;
  };
  // dispatch할 결과값에 수정/새로작성 id 분기처리
  const wordDispatch = (checkWordIdParam, resultData) => {
    if (checkWordIdParam) {
      dispatch(editWord(resultData));
    } else {
      dispatch(addWord(resultData));
    }
    navigate('/');
  };
  // 인풋에 있는 데이터 dispatch할 object로 최종 가공
  const makeResultPost = (inputData) => {
    const checkId = makeWordId(paramsWord.id);
    const resultWord: resultDataType = { id: Number(checkId) };
    inputData.forEach((item) => {
      resultWord[item.name] = item.ref.current.value;
    });
    return resultWord;
  };
  // submit 클릭 시 try-catch, 에러가 없으면 최종 dispatch
  const mysubmit = (e) => {
    const resultWord: resultDataType = makeResultPost(inputItems);
    e.preventDefault();
    try {
      checkInputValidation(resultWord);
      wordDispatch(paramsWord.id, resultWord);
      // eslint-disable-next-line no-shadow
    } catch (e) {
      alert(e);
    }
    return false;
  };
  return (
    <form
      onSubmit={(event) => {
        mysubmit(event);
      }}
    >
      {inputItems.map((item) => (
        <WriteInput key={item.name} inputInfo={item} />
      ))}
      <button type="submit">작성하기</button>
    </form>
  );
}

export default WriteForm;
