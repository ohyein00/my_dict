import React from 'react';
import styled, { css } from 'styled-components';

export type ButtonProps = {
  type: any;
  onClick?: any;
  children?: React.ReactNode;
  strong?: 'hard' | 'light';
  size?: 'l' | 'm' | 's';
  disabled?: boolean;
};

const StyledButton = styled.button`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  ${(props: any) => {
    if (props.strong === 'hard') {
      return css`
        color: white;
        background: #7856a9;
        font-weight: 500;
        border: none;
      `;
    }
    if (props.strong === 'light') {
      return css`
        color: ${({ theme }) => theme.colors.point_0};
        background: ${({ theme }) => theme.colors.point_2};
        font-weight: 500;
        border: none;
      `;
    }
    return css;
  }}
  ${(props) => {
    if (props.size === 'l') {
      return css`
        padding: 10px 20px;
      `;
    }
    if (props.size === 'm') {
      return css`
        padding: 10px 15px;
      `;
    }
    if (props.size === 's') {
      return css`
        padding: 10px 12px;
      `;
    }
    return css;
  }}
`;

function Button({ type, onClick, children, strong, size, disabled }: ButtonProps) {
  return (
    <StyledButton
      type={type}
      onClick={() => {
        onClick();
      }}
      strong={strong}
      size={size}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
