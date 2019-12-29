import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
// import { RootState } from './redux/types';
import Header from './components/header/header.component';
import Home from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import './App.css';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { Unsubscribe, User } from 'firebase';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

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

  componentWillUnmount() {
    if (this.unSubscribeFromAuth === null) return;
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route
              exact
              path="/signin"
              render={() =>
                this.props.currentUser ? (
                  <Redirect to="/" />
                ) : (
                  <SignInAndSignUpPage />
                )
              }
            />
          </Switch>
        </main>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
} as any);

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCurrentUser: (user: User) => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
