import React from 'react';

export default class SignInForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.signInGuest = this.signInGuest.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signIn(this.state);
  }

  signInGuest(e) {
    e.preventDefault();
    const user = { email: 'wenbox323@gmail.com', password: 'password' };
    this.props.signIn(user);
  }

  signInErrors() {
    return(
      <ul className='error'>
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
        <form className='sign-in-form' onSubmit={this.handleSubmit}>
          <div>
            <label>
              <div className='form-header'>
                Email
              </div>
              <input className='input-form'
                type='text'
                value={this.state.email}
                onChange={this.handleChange('email')}
              />
            </label>
          </div>
          <div>
            <label>
              <div className='form-header'>
                Password
              </div>
              <input className='input-form'
                type='password'
                onChange={this.handleChange('password')}
              />
            </label>
          </div>
          <div className='buttons-row'>
            <input className='log-in-btn' type='submit' value='Log In' />
            <input className='log-in-btn'
              type='submit'
              onClick={this.signInGuest}
              value='Guest'
            />
          </div>
        </form>
        <div>{this.signInErrors()}</div>
      </div>
    );
  }
}
