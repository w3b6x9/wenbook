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
            <div className='copy-column'>
              <div className='copy-title'>
                Connect with friends and the world around you on Facebook.
              </div>
              <div className='copy-list'>
                <img src={ window.images.newspaper_icon } />
                <div className="copy-bold">See photos and updates</div>
                <div className="copy-light">from friends in News Feed.</div>
              </div>
              <div className='copy-list'>
                <img src={ window.images.screen_icon } />
                <div className="copy-bold">Share what's new</div>
                <div className="copy-light">in your life on your timeline.</div>
              </div>
              <div className='copy-list'>
                <img src={ window.images.link_icon } />
                <div className="copy-bold">Find more</div>
                <div className="copy-light">
                  of what you're looking for with Facebook Search.
                </div>
              </div>
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
