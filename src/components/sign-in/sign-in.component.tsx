import * as React from 'react';
import './sign-in-and-sign-up.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ email: '', password: '' });
  };

  handleChange = e => {
    const { value, name } = event.target;
    this.setState({[name]: value})
  };

  render() {
    return (
      <section className="sign-in">
        <h2>I already have an account</h2>
        <p>Sign in with your email and password</p>

        <form>
          <input
            type="email"
            id="email"
            value={this.state.email}
            required
            onChange={this.handleChange}
          />
          <label htmlFor="email">EMAIL</label>
          <input
            type="password"
            id="password"
            value={this.state.password}
            required
            onChange={this.handleChange}
          />
          <label htmlFor="password">PASSWORD</label>
          <button className="submit" onClick={this.handleSubmit}>
            Submit Form
          </button>
        </form>
      </section>
    );
  }
}

export default SignIn;
