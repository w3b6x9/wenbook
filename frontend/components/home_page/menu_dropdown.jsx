import React from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class MenuDropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='dropdown'>
        <h1>Hi there!</h1>
        <Link to='/' onClick={this.props.signOut} replace>Log Out</Link>
      </div>
    );
  }
}
