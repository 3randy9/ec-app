import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import './menu-item.styles.scss';

interface Props extends RouteComponentProps {
  title: string;
  imageUrl: string;
  size?: string;
  linkUrl: string;
};

const MenuItem = (props: Props) => (
  <li
    className={`${props.size} menu-item`}
    onClick={() => props.history.push(`${props.match.url}${props.linkUrl}`)}
  >
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

export default withRouter(MenuItem);
