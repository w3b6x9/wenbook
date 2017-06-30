import React from 'react';

export default class NameForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateSingleUser(this.state);
    this.props.closeForm('nameForm')();
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit } className='detail-name-form'>

        <div className='detail-name-input'>
          <div className='form-top-row'>
            <label className='detail-field-row'>
              <div className='detail-name-title'>First name</div>
              <input className='detail-input-box'
                type='text'
                onChange={ this.handleChange('first_name') }
                value={ this.state.first_name }
              />
            </label>
            <div className='cancel-btn' onClick={this.props.closeForm('nameForm')}>
              <i className="fa fa-times cancel-icon" aria-hidden="true" />
              Cancel
            </div>
          </div>
          <div>
            <label className='detail-field-row'>
              <div className='detail-name-title'>Last name</div>
              <input className='detail-input-box'
                type='text'
                onChange={ this.handleChange('last_name') }
                value={ this.state.last_name }
                />
            </label>
          </div>
          <input className='confirm-btn detail-submit'
            type='submit' value='Save changes' />
        </div>
      </form>
    );
  }
}
