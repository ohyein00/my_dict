import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { Word } from '../../interfaces';

interface wordProps {
  word: Word;
  deleteWord: Function;
  editWord: Function;
}

const Article = styled.article`
  position: relative;
  width: 50%;
  padding: 30px;
  box-sizing: border-box;
  border-top: 1px solid #efefef;
  &:nth-child(1),
  &:nth-child(2) {
    border: none;
  }
`;
const Dl = styled.dl`
  display: flex;
  margin: 0 0 10px;
  align-items: center;

  dt {
    width: 3rem;
    flex-shrink: 0;
    font-size: 1.2rem;
  }
`;
const P = styled.p`
  margin: 0;
  font-size: 1.4rem;
  font-weight: 500;
`;
const Content = styled(P)``;
const Description = styled(P)``;
const Example = styled(P)`
  color: ${({ theme }) => theme.colors.point_2};
`;
const ButtonArea = styled.div`
  position: absolute;
  right: 20px;
  top: 35px;
  display: flex;
  button {
    background: none;
    border: none;
    color: #999;
    font-size: 1rem;
  }
`;
function WordBox({ word, deleteWord, editWord }: wordProps) {
  return (
    <Article>
      <Dl>
        <dt>단어</dt>
        <dd>
          <Content>{word.word}</Content>
        </dd>
      </Dl>
      <Dl>
        <dt>뜻</dt>
        <dd>
          <Description>{word.description}</Description>
        </dd>
      </Dl>
      <Dl>
        <dt>예제</dt>
        <dd>
          <Example>{word.example}</Example>
        </dd>
      </Dl>
      <ButtonArea>
        <button
          type="button"
          onClick={() => {
            deleteWord(word.id);
          }}
        >
          삭제
        </button>
        <button
          type="button"
          onClick={() => {
            editWord(word.id);
          }}
        >
          수정
        </button>
      </ButtonArea>
    </Article>
  );
}

export default WordBox;
