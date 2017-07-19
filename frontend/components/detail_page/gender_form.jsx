import React from 'react';

export default class GenderForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleRadioChange(value) {
    this.setState({ gender: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateSingleUser(this.state);
    this.props.closeForm('genderForm')();
  }

  render() {
    const { gender } = this.state;

    return (
      <form onSubmit={ this.handleSubmit } className='detail-name-form'>
        <div className='radio-section'>
          <div className='gender-row'>
            <label className='radio-gender'>
              <input type='radio'
                value='Female'
                className='radio-select'
                onChange={this.handleRadioChange.bind(this, 'Female')}
                checked={gender === 'Female'}
              />
            <div className='radio-text'>Female</div>
            </label>

            <label className='radio-gender'>
              <input type='radio'
                value='Male'
                className='radio-select'
                onChange={this.handleRadioChange.bind(this, 'Male')}
                checked={gender === 'Male'}
                />
              <div className='radio-text'>Male</div>
            </label>
          </div>
          <div className='cancel-btn gender-cancel' onClick={this.props.closeForm('genderForm')}>
             <i className="fa fa-times cancel-icon" aria-hidden="true" />
             Cancel
          </div>
        </div>
        <input className='confirm-btn detail-submit gender-submit'
          type='submit' value='Save changes' />
      </form>
    );
  }
}
