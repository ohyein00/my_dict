import React from 'react';
import WriteInput from '../../components/Write/Input';
import { InputType } from '../../interfaces';

function WordList() {
  const inputItems: InputType[] = [
    {
      label: '단어',
      id: 'word',
      type: 'text',
    },
    {
      label: '뜻',
      id: 'description',
      type: 'text',
    },
    {
      label: '예문',
      id: 'example',
      type: 'text',
    },
  ];
  return (
    <form>
      {inputItems.map((item) => (
        <WriteInput label={item.label} id={item.id} type={item.type} />
      ))}
      <button type="submit">작성하기</button>
    </form>
  );
}

export default WordList;
