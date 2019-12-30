import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './header.styles.scss';
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
  <header className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <ul className="options">
      <li className="option">
        <Link to="/shop">SHOP</Link>
      </li>
      <li className="option">
        <Link to="/contact">CONTACT</Link>
      </li>
      {currentUser ? (
        <li className="option">
          <button
            onClick={() => {
              auth.signOut();
            }}
          >
            SIGN OUT
          </button>
        </li>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </ul>
    {hidden ? null : <CartDropDown />}
  </header>
);

const mapStateToProps = createStructuredSelector<RootState, Props>({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
