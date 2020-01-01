import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const OptionContainerStyles = css`
  padding: 10px 15px;
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionsContainer = styled.ul`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLi = styled.li`
  ${OptionContainerStyles}
`;

export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;

export const OptionButton = styled.button`
  appearance: none;
  padding: 0;
  border: none;
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
