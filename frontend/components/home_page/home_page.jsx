import React from 'react';
import ProfileButton from './profile_button';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='home-body'>
        <div className='home-section-left' >
          <ProfileButton currentUser={ this.props.currentUser } />
          <div>News Feed</div>
        </div>
      </div>
    );
  }
}
