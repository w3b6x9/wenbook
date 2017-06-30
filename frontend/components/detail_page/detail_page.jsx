import React from 'react';
import ProfileContainer from './profile_container';
import ProfileNavigationContainer from './profile_navigation_container';
import ProfileAboutContainer from './profile_about_container';
import TimelineSection from './timeline_section';
import ProfileFriendsContainer from './profile_friends_container';

export default class DetailPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const path = this.props.location.pathname.split('/')[3];
    let component;

    if (path === 'about') {
      component = (<ProfileAboutContainer />);
    } else if (path === 'friends') {
      component = (<ProfileFriendsContainer />);
    } else {
      component = (<TimelineSection />);
    }

    return (
      <div className='detail-body'>
        <div className='detail-main-container'>
          <div className='detail-header-section'>
            <ProfileContainer />
          </div>
          <div className='profile-navbar'>
            <ProfileNavigationContainer />
          </div>
          <div>
            { component }
          </div>
        </div>
      </div>
    );
  }
}
