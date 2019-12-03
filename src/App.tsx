import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import Home from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import './App.css';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </main>
    </>
  );
};

export default App;
