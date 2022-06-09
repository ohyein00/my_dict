import React, { useRef, MutableRefObject, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import { useValidationInput } from '../../../hooks/useCheckError';

const LabelBox = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;
const Label = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
`;
const Name = styled.span`
  width: 100px;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.point_0};
`;
const Input = styled.input`
  width: 80%;
  padding: 10px 15px;
  border: 1px solid ${({ theme }) => theme.colors.point_4};
`;
const ErrorMessage = styled.p`
  color: #555;
  padding-left: 96px;
  margin-top: 5px;
`;
function WriteInput(props: { inputInfo }) {
  const { inputInfo } = props;
  const [errorContent, setErrorContent] = useState<string | boolean>('');
  return (
    <LabelBox>
      <Label>
        <Name>{inputInfo.label}</Name>
        <Input
          id={inputInfo.name}
          onChange={(e) => {
            setErrorContent(useValidationInput(e.target.value, inputInfo.label));
          }}
          type={inputInfo.type}
          ref={inputInfo.ref}
        />
      </Label>
      <ErrorMessage>{errorContent}</ErrorMessage>
    </LabelBox>
  );
}

export default WriteInput;
