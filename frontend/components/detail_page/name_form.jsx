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
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <div className='name-input'>
          <div>
            <input className='input-box-small'
              type='text'
              onChange={ this.handleChange('first_name') }
              value={ this.state.first_name }
            />
          </div>
          <div>
            <input className='input-box-small'
              type='text'
              onChange={ this.handleChange('last_name') }
              value={ this.state.last_name }
            />
          </div>
          <div>
            <input type='submit' value='Save changes' />
          </div>
        </div>
      </form>
    );
  }
}
