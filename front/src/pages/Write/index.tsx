import React, { MutableRefObject, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from 'uuid';
import WriteInput from '../../components/Write/Input';
import { addWord } from '../../redux/wordReducer';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';

type MyWordValue = {
  [key: string]: null | string;
};
function WriteForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const inputItems = [
    {
      label: '단어',
      name: 'word',
      type: 'text',
      content: useRef<any>(),
    },
    {
      label: '뜻',
      name: 'description',
      type: 'text',
      content: useRef<any>(),
    },
    {
      label: '예문',
      name: 'example',
      type: 'text',
      content: useRef<any>(),
    },
  ];
  const myWord: MyWordValue = {};
  const submitWord = () => {
    myWord.id = uuidv4();
    inputItems.forEach((item) => {
      myWord[item.name] = item.content.current.value;
    });
    dispatch(addWord(myWord));
    navigate('/');
  };

  return (
    <form>
      {inputItems.map((item) => (
        <WriteInput key={item.name} inputInfo={item} />
      ))}
      <button type="button" onClick={submitWord}>
        작성하기
      </button>
    </form>
  );
}

export default WriteForm;
