import React from 'react';

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
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleChange(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  handleSelectChange(property) {
    return e => this.setState({ [property]: e.target.value });
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
      <ul className='error'>
        {this.props.errors.map((error, idx) => {
          return (
            <li key={idx}>{error}</li>
          );
        })}
      </ul>
    );
  }

  selectMonth() {
    const options = [
      <option selected="selected" key={0}>Month</option>
    ];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
      'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    for (let i = 1; i <= 12; i++) {
      const month = months[i - 1];

      options.push(
        <option value={i}
          key={i}
        >{months[i - 1]}</option>
      );
    }

    return (
      <select className='select-dropdown'
        onChange={this.handleSelectChange('birth_month')}
      >{options}
      </select>
    );
  }

  selectDay() {
    const options = [
      <option selected="selected" key={0}>Day</option>
    ];

    for (let i = 1; i <= 31; i++) {
      options.push(
        <option value={i}
          key={i}
        >{i}</option>
      );
    }

    return (
      <select className='select-dropdown'
        onChange={this.handleSelectChange('birth_day')}
      >{options}</select>
    );
  }

  selectYear() {
    const options = [
      <option selected="selected" key={-1}>Year</option>
    ];

    this.props.years.forEach((year, idx) => (
      options.push(
        <option value={year}
          key={idx}
        >{year}</option>
      )
    ));

    return (
      <select className='select-dropdown'
        onChange={this.handleSelectChange('birth_year')}
      >{options}</select>
    );
  }

  render() {
    const { first_name, last_name, email, gender } = this.state;

    return (
      <div>
        <div className='sign-up-text'>Sign Up</div>
        <div className='sign-up-tag'>It's free and always will be.</div>
        <form className='sign-up-inner'>
          <div className='name-input'>
            <input className='input-box-small'
              type='text'
              onChange={this.handleChange('first_name')}
              placeholder='First name'
            />
            <input className='input-box-small'
              type='text'
              onChange={this.handleChange('last_name')}
              placeholder='Last name'
            />
          </div>
            <input className='input-box'
              type='text'
              onChange={this.handleChange('email')}
              placeholder='Email'
            />
          <input className='input-box'
              type='password'
              onChange={this.handleChange('password')}
              placeholder='New Password'
            />
          <div className='sign-up-tag margin-top'>
            <label>
              Birthday
                <div className='birthday-dropdown'>
                  <div>
                    { this.selectMonth() }
                  </div>
                  <div>
                    { this.selectDay() }
                  </div>
                  <div>
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
        <div>{this.signUpErrors()}</div>
      </div>
    );
  }
}
