import React from 'react';
import { Word } from '../../interfaces';

interface wordProps {
  word: Word;
}

function WordBox({ word }: wordProps) {
  return (
    <div>
      <article>
        <p>{word.word}</p>
        <p>{word.description}</p>
        <p>{word.example}</p>
        <button type="button">삭제</button>
        <button type="button">수정</button>
      </article>
    </div>
  );
}

export default WordBox;
