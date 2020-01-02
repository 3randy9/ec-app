import styled, { css } from 'styled-components';

const large = css`
  height: 380px;
`;

const getLarge = (props: { size?: string }) => {
  return props.size ? large : '';
};

const getImageUrl = (props: { img: string }) => {
  return props.img ? props.img : '';
};

export const MenuImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${getImageUrl});
  background-size: cover;
  background-position: center;
`;

export const MenuContent = styled.div`
  position: absolute;
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: #fff;
  opacity: 0.7;
`;

export const MenuItemTitle = styled.h2`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;

export const MenuItemSubTitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;

export const MenuItemContainer = styled.li`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;
  ${getLarge}

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  &:hover {
    cursor: pointer;

    ${MenuImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    ${MenuContent} {
      opacity: 0.9;
    }
  }
`;
