import * as React from 'react';
import './custom-button.styles.scss';

type Props = {
  onClick: (e: React.MouseEvent<EventTarget>) => void;
  type: 'button' | 'submit';
  isGoogleSignIn?: 'google-sign-in'
};

const CustomButton: React.FC<Props> = ({
  children,
  isGoogleSignIn,
  ...otherProps
}) => (
  <button
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
