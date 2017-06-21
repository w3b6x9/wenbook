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
      birth_month: null,
      birth_day: null,
      birth_year: null,
      gender: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  handleSelectChange(property) {
    return ({value}) => this.setState({ [property]: value });
  }

  handleRadioChange(value) {
    this.setState({ gender: value });
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
        placeholder='Month'
        value={this.state.birth_month}
        searchable={false}
        clearable={false}
        options={options}
        onChange={this.handleSelectChange('birth_month')}
      />
    );
  }

  selectDay() {
    const options = [];

    for (let i = 1; i <= 31; i++) {
      options.push({ value: i, label: [i]});
    }

    return (
      <Select
        placeholder='Day'
        value={this.state.birth_day}
        searchable={false}
        clearable={false}
        options={options}
        onChange={this.handleSelectChange('birth_day')}
      />
    );
  }

  selectYear() {
    const options = [];

    this.props.years.forEach(year => (
      options.push({ value: year, label: [year] })
    ));

    return (
      <Select
        placeholder='Year'
        value={this.state.birth_year}
        searchable={false}
        clearable={false}
        options={options}
        onChange={this.handleSelectChange('birth_year')}
      />
  );
  }

  render() {
    const { first_name, last_name, email, gender } = this.state;

    return (
      <div>
        <div className='sign-up-text'>Sign Up</div>
        <div className='sign-up-tag'>It's free and always will be.</div>
        {this.signUpErrors()}
        <form className='sign-up-inner'>
          <div className='name-input'>
            <input className='input-box-small'
              type='text'
              value={first_name}
              onChange={this.handleChange('first_name')}
              placeholder='First name'
            />
            <input className='input-box-small'
              type='text'
              value={last_name}
              onChange={this.handleChange('last_name')}
              placeholder='Last name'
            />
          </div>
            <input className='input-box'
              type='text'
              value={email}
              onChange={this.handleChange('email')}
              placeholder='Email'
            />
          <input className='input-box'
              type='password'
              onChange={this.handleChange('password')}
              placeholder='New Password'
            />
          <div className='sign-up-tag border-top'>
            <label>
              Birthday
                <div className='birthday-dropdown'>
                  <div className='select-dropdown'>
                    { this.selectMonth() }
                  </div>
                  <div className='select-dropdown'>
                    { this.selectDay() }
                  </div>
                  <div className='select-dropdown'>
                    { this.selectYear() }
                  </div>
                </div>
            </label>
          </div>
          <div>
            <label className='radio-gender'>
              <input type='radio' value='Female'
                onChange={this.handleRadioChange.bind(this, 'Female')}
                checked={gender === 'Female'}
              />
              Female
            </label>
            <label className='radio-gender'>
              <input type='radio' value='Male'
                onChange={this.handleRadioChange.bind(this, 'Male')}
                checked={gender === 'Male'}
                />
              Male
            </label>
          </div>
          <button className='btn-create' onClick={this.handleSubmit}
            type='submit'>Create Account</button>
        </form>
      </div>
    );
  }
}
