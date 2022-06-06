import React from 'react';
import WordBox from 'components/WordBox';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function WordList() {
  const navigate = useNavigate();
  const wordState = useSelector((state) => state.word.value);

  return (
    <div>
      <button type="button" onClick={() => navigate('/write')}>
        단어 쓰기
      </button>
      {wordState.map((word) => (
        <WordBox word={word} />
      ))}
    </div>
  );
}

export default WordList;
