// eslint-disable-next-line import/prefer-default-export
import React from 'react';

// eslint-disable-next-line import/prefer-default-export
export const useValidationInput = (data, name) => (data === '' ? `${name}을 입력해주세요.` : false);
