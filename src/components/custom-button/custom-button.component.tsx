import React from 'react';
import { CustomButtonContainer } from './custom-button.styles';

type Props = {
  onClick: (e: React.MouseEvent<EventTarget>) => void;
  type: 'button' | 'submit';
  isGoogleSignIn?: boolean;
  inverted?: boolean;
  tabIndex?: -1 | 0;
};

const CustomButton: React.FC<Props> = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;
