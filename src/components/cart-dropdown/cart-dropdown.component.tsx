import * as React from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

const CartDropdown: React.FC = () => (
  <div className="cart-dropdown">
    <ul className="cart-items">
      <li></li>
    </ul>
    <CustomButton type="button" onClick={() => {}}>
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

export default CartDropdown;
