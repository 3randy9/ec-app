import React from 'react';
import './menu-item.styles.scss';

type Props = {
  title: string;
  imageUrl: string;
  size?: string;
};

const MenuItem = (props: Props) => (
  <li className={`${props.size} menu-item`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${props.imageUrl})`
      }}
    ></div>
    <div className="menu-item_content">
      <h2 className="title">{props.title.toUpperCase()}</h2>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </li>
);

export default MenuItem;
