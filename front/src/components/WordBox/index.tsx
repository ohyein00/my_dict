import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Word } from '../../interfaces';
import Button from '../../styles/buttons';

interface wordProps {
  word: Word;
  deleteWord: Function;
  id: number;
  editWord?: Function;
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
function WordBox({ word, id, deleteWord, editWord }: wordProps) {
  const navigate = useNavigate();
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
        <Button
          type="button"
          onClick={() => {
            editWord(word.id);
          }}
        >
          useCallback 지우고 그냥 함수를 데려와도 실행됨.
        </Button>
      </ButtonArea>
    </Article>
  );
}

export default WordBox;
