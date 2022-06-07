import React, { MutableRefObject } from 'react';

type InputProps = {
  label: string;
  name: string;
  type: string;
  content: MutableRefObject<any>;
};
function WriteInput(props: { inputInfo: InputProps }) {
  const { inputInfo } = props;
  return (
    <div>
      <label>
        {inputInfo.label}
        <input id={inputInfo.name} type={inputInfo.type} ref={inputInfo.content} />
      </label>
    </div>
  );
}

export default WriteInput;
