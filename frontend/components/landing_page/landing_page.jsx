import React from 'react';
import SignInFormContainer from './sign_in_form_container';
import SignUpFormContainer from './sign_up_form_container';

export default class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Landing Page!</h1>
        <SignInFormContainer />
        <SignUpFormContainer />
      </div>
    );
  }
}
