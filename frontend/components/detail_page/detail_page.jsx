import React from 'react';
import ProfileContainer from './profile_container';
import ProfileNavigationContainer from './profile_navigation_container';
import ProfileAboutContainer from './profile_about_container';
import TimelineSection from './timeline_section';

export default class DetailPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='detail-body'>
        <div className='detail-header-section'>
          <ProfileContainer />
        </div>
        <div className='profile-navbar'>
          <ProfileNavigationContainer />
        </div>
        <div>
          { (this.props.location.pathname.split('/')[3] === 'about') ?
            <ProfileAboutContainer /> : <TimelineSection /> }
        </div>
      </div>
    );
  }
}
