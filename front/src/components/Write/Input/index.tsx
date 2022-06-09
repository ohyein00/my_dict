import React, { useRef, MutableRefObject, SetStateAction, useState } from 'react';
import { useValidationInput } from '../../../hooks/useCheckError';

function WriteInput(props: { inputInfo }) {
  const { inputInfo } = props;
  const [errorContent, setErrorContent] = useState<string | boolean>('');
  return (
    <div>
      <label>
        {inputInfo.label}
        <input
          id={inputInfo.name}
          onChange={(e) => {
            setErrorContent(useValidationInput(e.target.value, inputInfo.label));
          }}
          type={inputInfo.type}
          ref={inputInfo.ref}
        />
      </label>
      <p>{errorContent}</p>
    </div>
  );
}

export default WriteInput;
