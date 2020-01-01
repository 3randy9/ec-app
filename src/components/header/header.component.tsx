import React from 'react';
import { Link } from 'react-router-dom';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLi,
  OptionLink,
  OptionButton
} from './header.styles';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cat-icon/cart-icon.component';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { auth } from '../../firebase/firebase.utils';
import { UserState } from '../../redux/user/types';
import { CartState } from '../../redux/cart/types';
import { RootState } from '../../redux/types';

type Props = Pick<UserState, 'currentUser'> & Pick<CartState, 'hidden'>;

const Header: React.FC<Props> = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLi>
        <Link to="/shop">SHOP</Link>
      </OptionLi>
      <OptionLi>
        <Link to="/contact">CONTACT</Link>
      </OptionLi>
      {currentUser ? (
        <OptionLi>
          <OptionButton
            onClick={() => {
              auth.signOut();
            }}
          >
            SIGN OUT
          </OptionButton>
        </OptionLi>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropDown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector<RootState, Props>({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
