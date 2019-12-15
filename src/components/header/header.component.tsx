import * as React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { User } from 'firebase';

interface Props {
  currentUser: User | null;
}

const signOut = () => {
  auth.signOut();
}

const Header = ({ currentUser }: Props) => (
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

export default React.memo(Header);
