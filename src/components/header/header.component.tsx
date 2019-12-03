import * as React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = () => (
  <header className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <ul className="options">
      <li className="option">
        <Link to="/shop">SHOP</Link>
      </li>
      <li>
        <Link to="/contact">CONTACT</Link>
      </li>
    </ul>
  </header>
);

export default Header;
