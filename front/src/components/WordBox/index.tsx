import React, { MouseEventHandler } from 'react';
import { Word } from '../../interfaces';

interface wordProps {
  word: Word;
  deleteWord: Function;
}

function WordBox({ word, deleteWord }: wordProps) {
  return (
    <div>
      <article>
        <p>{word.word}</p>
        <p>{word.description}</p>
        <p>{word.example}</p>
        <button
          type="button"
          onClick={() => {
            deleteWord(word.id);
          }}
        >
          삭제
        </button>
        <button type="button">수정</button>
      </article>
    </div>
  );
}

export default WordBox;
