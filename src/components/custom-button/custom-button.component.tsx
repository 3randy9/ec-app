import * as React from 'react';
import './custom-button.styles.scss';

type Props = {
  onClick: (e: React.MouseEvent<EventTarget>) => void;
  type: 'button' | 'submit';
  isGoogleSignIn?: 'google-sign-in';
  inverted?: 'inverted';
  tabIndex?: -1 | 0;
};

const CustomButton: React.FC<Props> = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${inverted ? 'inverted' : ''} ${
      isGoogleSignIn ? 'google-sign-in' : ''
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
