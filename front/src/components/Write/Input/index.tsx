import React from 'react';
import { InputType } from '../../../interfaces';

function WriteInput(props: InputType) {
  const { label, id, type } = props;
  return (
    <div>
      <label>
        {label}
        <input id={id} type={type} />
      </label>
    </div>
  );
}

export default WriteInput;
