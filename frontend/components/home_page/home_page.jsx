import React from 'react';
import { Redirect } from 'react-router-dom';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.signOutAndRedirect = this.signOutAndRedirect.bind(this);
  }
  signOutAndRedirect() {
    this.props.signOut();
    <Redirect to='/' />
  }

  render() {
    return (
      <div>
        <h1>Home!</h1>
        <button onClick={this.signOutAndRedirect}>Log Out</button>
      </div>
    );
  }
}
