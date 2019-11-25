import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component'
import './App.css';

const App: React.FC = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </main>
  );
};

export default App;
