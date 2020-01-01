import styled, { css } from 'styled-components';

const containerWidth = css`
  width: 23%;
`;

export const CheckoutItemContainer = styled.ul`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;
export const ImageContainer = styled.li`
  ${containerWidth}
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;
export const ItemContainer = styled.li`
  ${containerWidth}
`;

export const ItemQuantityContainer = styled.li`
  display: flex;
  ${containerWidth}

  .arrow {
    appearance: none;
    padding: 0;
    border: none;
    background-color: #fff;
    font-size: 20px;
  }

  .value {
    margin: 0 10px;
  }
`;

export const RemoveButton = styled.button`
  appearance: none;
  border: none;
  background-color: #fff;
  padding: 0 0 0 12px;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
`;
