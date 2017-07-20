import React from 'react';

export default class EmailForm extends React.Component {
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
    this.props.closeForm('emailForm')();
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit } className='detail-name-form'>

        <div className='detail-name-input'>
          <div className='form-top-row'>
            <label className='detail-field-row'>
              <div className='detail-name-title'>Email</div>
              <input className='detail-input-box'
                type='text'
                onChange={ this.handleChange('email') }
                value={ this.state.email }
              />
            </label>
            <div className='cancel-btn email-cancel' onClick={this.props.closeForm('emailForm')}>
              <i className="fa fa-times cancel-icon" aria-hidden="true" />
              Cancel
            </div>
          </div>
          <input className='confirm-btn detail-submit'
            type='submit' value='Save changes' />
        </div>
      </form>
    )
  }
}
