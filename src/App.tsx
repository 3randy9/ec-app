import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
import Header from './components/header/header.component';
import Home from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import './App.css';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { Unsubscribe, User } from 'firebase';

class App extends React.Component {
  props: any;
  unSubscribeFromAuth: Unsubscribe | null = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (!userAuth) return;
      const userRef = await createUserProfileDocument(userAuth);

      if (userRef === undefined) return;
      userRef.onSnapshot(snapShot => {
        this.props.setCurrentUser({
          id: snapShot.id,
          ...snapShot.data()
        });
      });
      setCurrentUser(userAuth);
    });
  }

  render() {
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
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCurrentUser: (user: User) => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
