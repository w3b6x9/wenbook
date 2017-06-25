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
  }

  render() {
    const { gender } = this.state;

    return (
      <form onSubmit={ this.handleSubmit }>
        <div className='radio-section'>
          <div>
            <label className='radio-gender'>
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
        </div>
        <div>
          <input type='submit' value='Save changes' />
        </div>
      </form>
    );
  }
}
