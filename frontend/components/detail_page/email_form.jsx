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
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <div>
          <input className='input-box'
            type='text'
            onChange={ this.handleChange('email') }
            value={ this.state.email }
          />
        </div>
        <div>
          <input type='submit' value='Save changes' />
        </div>
      </form>
    )
  }
}
