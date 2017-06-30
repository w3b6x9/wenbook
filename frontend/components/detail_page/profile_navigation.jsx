import React from 'react';
import { NavLink } from 'react-router-dom';

export default class ProfileNavigation extends React.Component {
  render() {
    const timelinePath = '/profile/' + this.props.userId;
    const aboutPath = '/profile/' + this.props.userId + '/about';
    const friendsPath = '/profile/' + this.props.userId + '/friends';

    return (
      <div>
        <div className='profile-navbar-tabs'>
          <NavLink exact to={timelinePath}
            className='profile-navbar-tab'
            activeClassName='tab-selected'
            replace
          >
            Timeline
          </NavLink>
          <NavLink exact to={aboutPath}
            className='profile-navbar-tab'
            activeClassName='tab-selected'
            replace
          >
            About
          </NavLink>
          <NavLink exact to={friendsPath}
            className='profile-navbar-tab nav-friends-count'
            activeClassName='tab-selected'
            replace
          >
            Friends
            <div className='friends-count'>{ this.props.friendsCount }</div>
          </NavLink>
        </div>
      </div>
    );
  }
}
