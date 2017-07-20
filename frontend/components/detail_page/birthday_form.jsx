import React from 'react';

export default class BirthdayForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSelectChange(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateSingleUser(this.state);
    this.props.closeForm('birthdayForm')();
  }

  selectMonth() {
    const options = [];
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
        value={this.state.birth_month}
      >{options}
      </select>
    );
  }

  selectDay(birthDayError) {
    const options = [];

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
        value={this.state.birth_day}
      >{options}</select>
    );
  }

  selectYear() {
    const options = [];

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
        value={this.state.birth_year}
      >{options}</select>
    );
  }

  render() {
    return(
      <form onSubmit={ this.handleSubmit } className='detail-name-form'>
        <div className='sign-up-tag margin-top about-birthday'>
          <label className='birthday-row'>
            <div className='detail-name-title birthday-title'>Birthday</div>
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
          <div className='cancel-btn birthday-cancel' onClick={this.props.closeForm('birthdayForm')}>
             <i className="fa fa-times cancel-icon" aria-hidden="true" />
             Cancel
          </div>
        </div>
        <input className='confirm-btn detail-submit birthday-submit'
          type='submit' value='Save changes' />
      </form>
    );
  }
}
