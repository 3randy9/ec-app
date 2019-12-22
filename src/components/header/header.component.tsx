import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { UserState } from '../../redux/user/types';
import { RootState } from '../../redux/types';

const signOut = () => {
  auth.signOut();
};

const Header = ({ currentUser }: UserState) => (
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
          <button onClick={signOut}>SIGN OUT</button>
        </li>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
    </ul>
  </header>
);

const mapStateToProps = (state: RootState) => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
