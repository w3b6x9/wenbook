import React from 'react';
import SignInFormContainer from './sign_in_form_container';
import SignUpFormContainer from './sign_up_form_container';

export default class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <div className='signed-out-nav'>
          <div className='container'>
            <p className='logo'>wenbook</p>
            <SignInFormContainer />
            </div>
        </div>
        <div className="landing-background">
          <div className='container'>
            <div>
              Words...
            </div>
            <div className='sign-up-form'>
              <SignUpFormContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
