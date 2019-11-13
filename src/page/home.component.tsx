import React from 'react';
import './home.styles.scss'

const Home = () => (
  <section className="home">
    <nav className="menu">
      <ul className="menu-items">
        <li className="menu-item">
          <div className="menu-item_content">
            <h2 className="title">HATS</h2>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </li>
        <li className="menu-item">
          <div className="menu-item_content">
            <h2 className="title">JACKETS</h2>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </li>
        <li className="menu-item">
          <div className="menu-item_content">
            <h2 className="title">SNEAKERS</h2>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </li>
        <li className="menu-item">
          <div className="menu-item_content">
            <h2 className="title">WOMENS</h2>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </li>
        <li className="menu-item">
          <div className="menu-item_content">
            <h2 className="title">MENS</h2>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </li>
      </ul>
    </nav>
  </section>
);

export default Home;
