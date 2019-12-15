import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import Home from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import './App.css';
import { auth } from './firebase/firebase.utils';
import { Unsubscribe, User } from 'firebase';

interface State {
  currentUser: User | null;
}

class App extends React.Component {
  state: State;
  constructor(props: any) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  unSubscribeFromAuth: Unsubscribe | null = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ currentUser: user });
      }
    });
  }

  componentWillUnmount() {
    this.setState({ currentUser: null });
  }

  render() {
    return (
      <>
        <Header currentUser={this.state.currentUser} />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/signin" component={SignInAndSignUpPage} />
          </Switch>
        </main>
      </>
    );
  }
}

export default App;
