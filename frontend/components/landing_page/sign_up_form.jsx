import React from 'react';

export default class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: '',
      last_name: '',
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
    this.props.signUp(this.state);
  }

  renderErrors() {
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
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <label>
            First name
            <input type='text'
              value={this.state.first_name}
              onChange={this.handleChange('first_name')}
            />
          </label>
          <label>
            Last name
            <input type='text'
              value={this.state.last_name}
              onChange={this.handleChange('last_name')}
            />
          </label>
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
          <input type='submit' value='Create Account' />
        </form>
      </div>
    );
  }
}
