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

  selectMonth(birthMonthError) {
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
      <select className={birthMonthError ? 'select-dropdown error-border' : 'select-dropdown'}
        onChange={this.handleSelectChange('birth_month')}
      >{options}
      </select>
    );
  }

  selectDay(birthDayError) {
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
      <select className={birthDayError ? 'select-dropdown error-border' : 'select-dropdown'}
        onChange={this.handleSelectChange('birth_day')}
      >{options}</select>
    );
  }

  selectYear(birthYearError) {
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
      <select className={birthYearError ? 'select-dropdown error-border' : 'select-dropdown'}
        onChange={this.handleSelectChange('birth_year')}
      >{options}</select>
    );
  }

  render() {
    const { first_name, last_name, email, gender } = this.state;
    const firstNameError = this.props.errors.includes('First name can\'t be blank');
    const lastNameError = this.props.errors.includes('Last name can\'t be blank');
    const emailBlankError = this.props.errors.includes('Email can\'t be blank');
    const emailInvalidError = this.props.errors.includes('Email is invalid');
    const emailTakenError = this.props.errors.includes('Email has already been taken');
    const passwordBlankError = this.props.errors.includes('Password is too short (minimum is 6 characters)');
    const birthYearError = this.props.errors.includes('Birth year can\'t be blank');
    const birthMonthError = this.props.errors.includes('Birth month can\'t be blank');
    const birthDayError = this.props.errors.includes('Birth day can\'t be blank');
    const genderError = this.props.errors.includes('Gender can\'t be blank');

    return (
      <div>
        <div className='sign-up-text'>Sign Up</div>
        <div className='sign-up-tag'>It's free and always will be.</div>
        <form className='sign-up-inner'>
          <div className='name-input'>
            <div>
              <input className={firstNameError ? 'input-box-small error-border' : 'input-box-small'}
                type='text'
                onChange={this.handleChange('first_name')}
                placeholder='First name'
              />
              {firstNameError ? <div className='error-msg-bottom'>First name can't be blank</div> : null}
            </div>
            <div>
              <input className={lastNameError ? 'input-box-small error-border' : 'input-box-small'}
                type='text'
                onChange={this.handleChange('last_name')}
                placeholder='Last name'
              />
              {firstNameError ? <div className='error-msg-bottom'>Last name can't be blank</div> : null}
            </div>
          </div>
          <div>
            <input className={(emailBlankError || emailInvalidError || emailTakenError) ? 'input-box error-border' : 'input-box'}
              type='text'
              onChange={this.handleChange('email')}
              placeholder='Email'
            />
            {emailBlankError ? <div className='error-msg-bottom'>Email can't be blank</div> : null ||
              emailInvalidError ? <div className='error-msg-bottom'>Email is invalid</div> : null}
            {emailTakenError ? <div className='error-msg-bottom'>Email has already been taken</div> : null}
          </div>
          <div>
            <input className={passwordBlankError ? 'input-box error-border' : 'input-box'}
              type='password'
              onChange={this.handleChange('password')}
              placeholder='New Password'
            />
          {passwordBlankError ? <div className='error-msg-bottom'>Password minimum length is 6 characters</div> : null}
          </div>
          <div className='sign-up-tag margin-top'>
            <label>
              Birthday
                <div className='birthday-dropdown'>
                  <div>
                    { this.selectMonth(birthMonthError) }
                  </div>
                  <div>
                    { this.selectDay(birthDayError) }
                  </div>
                  <div>
                    { this.selectYear(birthYearError) }
                  </div>
                </div>
            </label>
          </div>
          <div className='radio-section'>
            <div>
              <label className={genderError ? 'radio-gender error-border' : 'radio-gender'}>
                <input type='radio'
                  value='Female'
                  className='radio-select'
                  onChange={this.handleRadioChange.bind(this, 'Female')}
                  checked={gender === 'Female'}
                />
              <div className='radio-text'>Female</div>
              </label>
            </div>
            <div>
              <label className={genderError ? 'radio-gender error-border' : 'radio-gender'}>
                <input type='radio'
                  value='Male'
                  className='radio-select'
                  onChange={this.handleRadioChange.bind(this, 'Male')}
                  checked={gender === 'Male'}
                  />
                <div className='radio-text'>Male</div>
              </label>
            </div>
          </div>
          <button className='btn-create' onClick={this.handleSubmit}
            type='submit'>Create Account</button>
        </form>
      </div>
    );
  }
}
