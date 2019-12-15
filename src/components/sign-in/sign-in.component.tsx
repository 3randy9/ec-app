import * as React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

type State = {
  email: string;
  password: string;
};

class SignIn extends React.Component {
  state: State;

  constructor(props: any) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = (e: React.MouseEvent<EventTarget>) => {
    e.preventDefault();
    this.setState({ email: '', password: '' });
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <section className="sign-in">
        <h2>I already have an account</h2>
        <p>Sign in with your email and password</p>

        <form>
          <FormInput
            type="email"
            id="email"
            value={this.state.email}
            required
            handleChange={this.handleChange}
            label="email"
          />
          <FormInput
            type="password"
            id="password"
            value={this.state.password}
            required
            handleChange={this.handleChange}
            label="password"
          />
          <div className="buttons">
            <CustomButton type="submit" onClick={this.handleSubmit}>
              Sign in
            </CustomButton>
            <CustomButton
              type="button"
              onClick={signInWithGoogle}
              isGoogleSignIn="google-sign-in"
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </section>
    );
  }
}

export default SignIn;
