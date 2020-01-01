import styled from 'styled-components';

export const CartIconContainer = styled.button`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  padding: 0;
  border: none;
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 16px;
  cursor: pointer;

  .shopping-icon {
    width: 24px;
    height: 24px;
  }
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
