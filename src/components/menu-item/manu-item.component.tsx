import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import {
  MenuItemContainer,
  MenuContent,
  MenuImage,
  MenuItemTitle,
  MenuItemSubTitle
} from './menu-item.styles';

interface Props extends RouteComponentProps {
  title: string;
  imageUrl: string;
  size?: string;
  linkUrl: string;
}

const MenuItem: React.FC<Props> = ({
  title,
  imageUrl,
  linkUrl,
  size,
  history,
  match
}) => {
  const handleClickRooter = () => {
    history.push(`${match.url}${linkUrl}`);
  };

  return (
    <MenuItemContainer
      role="button"
      size={size}
      onClick={handleClickRooter}
      onKeyPress={handleClickRooter}
      tabIndex={0}
    >
      <MenuImage img={imageUrl} />
      <MenuContent>
        <MenuItemTitle>{title.toUpperCase()}</MenuItemTitle>
        <MenuItemSubTitle>SHOP NOW</MenuItemSubTitle>
      </MenuContent>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
