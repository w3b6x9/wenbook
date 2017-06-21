import React from 'react';
import Select from 'react-select';

export default class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      birth_month: 0,
      birth_day: 0,
      birth_year: 0,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  handleSelectChange(property) {
    return ({value}) => this.setState({ [property]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signUp(this.state);
  }

  signUpErrors() {
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

  selectMonth() {
    const options = [];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
      'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    for (let i = 1; i <= 12; i++) {
      options.push({ value: i, label: months[i - 1] });
    }

    return (
      <Select
        placeholder="Month"
        value={this.state.birth_month}
        searchable={false}
        clearable={false}
        options={options}
        onChange={this.handleSelectChange("birth_month")}
      />
    );
  }

  render() {
    return (
      <div>
        {this.signUpErrors()}
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
          <label>
            {this.selectMonth()}
          </label>
        </form>
      </div>
    );
  }
}
