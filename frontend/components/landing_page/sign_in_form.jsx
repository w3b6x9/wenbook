import React from 'react';

export default class SignInForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signIn(this.state);
  }

  signInErrors() {
    return(
      <ul>
        {this.props.errors.map((error, idx) => {
          return (
            <li key={idx}>{error}</li>
          );
        })}
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.signInErrors()}
        <form onSubmit={this.handleSubmit}>
          <label>
            Email
            <input type='text'
              value={this.state.email}
              onChange={this.handleChange('email')}
            />
          </label>
          <label>
            Password
            <input type='password'
              onChange={this.handleChange('password')}
            />
          </label>
          <input type='submit' value='Log In' />
        </form>
      </div>
    );
  }
}
