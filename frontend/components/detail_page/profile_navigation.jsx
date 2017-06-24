import React from 'react';
import { Link } from 'react-router-dom';

export default class ProfileNavigation extends React.Component {
  render() {
    const timelinePath = '/profile/' + this.props.userId;
    const aboutPath = '/profile/' + this.props.userId + '/about';

    return (
      <div className='profile-navbar-tabs'>
        <div className='profile-navbar-tab'>
          <Link to={timelinePath} replace>Timeline</Link>
        </div>
        <div className='profile-navbar-tab'>
          <Link to={aboutPath} replace>About</Link>
        </div>
      </div>
    );
  }
}
