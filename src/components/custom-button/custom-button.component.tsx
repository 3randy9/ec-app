import * as React from 'react';
import './custom-button.styles.scss';

type Props = {
  onClick: (e: React.MouseEvent<EventTarget>) => void;
  type: 'button' | 'submit';
};

const CustomButton: React.FC<Props> = ({ children, ...otherProps }) => (
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
