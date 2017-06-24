import React from 'react';
import ProfileContainer from './profile_container';
import ProfileNavigationContainer from './profile_navigation_container';

export default class DetailPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='detail-body'>
        <div className='detail-header-section'>
          <div className='header-subsection'>
            <ProfileContainer />
            <div className='profile-navbar'>
              <ProfileNavigationContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
