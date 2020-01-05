import styled, { css } from 'styled-components';

const subColor = 'grey';
const mainColor = 'black';

const shrinkLabel = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

const inputPassword = css`
  letter-spacing: 0.3em;
`;

const getShrink = (props: { value: number }) => {
  return props.value ? shrinkLabel : '';
};

const getType = (props: { type: 'text' | 'email' | 'password' }) => {
  return props.type === 'password' ? inputPassword : '';
};

export const InputField = styled.div`
  position: relative;
  margin: 45px 0;
`;

export const Label = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  ${getShrink}
`;

export const Input = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;

  ${getType}

  &:focus {
    outline: none;
  }

  &:focus ~ ${Label} {
    ${shrinkLabel}
  }
`;