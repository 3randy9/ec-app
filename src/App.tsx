import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home/home.component';
import './App.css';

const HatsPage: React.FC = () => (
  <div>
    <h1>HatsPage</h1>
  </div>
);

const App: React.FC = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop/hats" component={HatsPage} />
      </Switch>
    </main>
  );
};

export default App;
